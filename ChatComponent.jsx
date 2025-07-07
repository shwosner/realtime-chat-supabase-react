import { useState, useEffect, useRef } from 'react';
import { supabase } from './supabaseClient'; // Passe den Pfad an, je nachdem wo dein Supabase-Client definiert ist
import './ChatComponent.css';

export default function ChatComponent() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);

  // Chat-Verlauf beim Laden der Komponente abrufen
  useEffect(() => {
    const fetchChatHistory = async () => {
      // Neueste Konversation des Benutzers abrufen oder eine neue erstellen
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: conversations } = await supabase
          .from('chat_messages')
          .select('conversation_id')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1);
        
        if (conversations && conversations.length > 0) {
          const currentConversationId = conversations[0].conversation_id;
          setConversationId(currentConversationId);
          
          // Nachrichten für diese Konversation abrufen
          const { data: messages } = await supabase
            .from('chat_messages')
            .select('*')
            .eq('conversation_id', currentConversationId)
            .order('created_at', { ascending: true });
          
          if (messages) {
            setChatHistory(messages);
          }
        } else {
          // Neue Konversations-ID erstellen
          setConversationId(crypto.randomUUID());
        }
      }
    };
    
    fetchChatHistory();
  }, []);

  // Automatisch zum Ende des Chats scrollen, wenn sich der Chatverlauf ändert
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Benutzernachricht zum Chat hinzufügen
    const userMessage = {
      content: message,
      is_user: true,
      created_at: new Date().toISOString()
    };
    
    setChatHistory([...chatHistory, userMessage]);
    setIsLoading(true);
    setMessage('');
    
    try {
      // Benutzernachricht in der Datenbank speichern
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        await supabase.from('chat_messages').insert({
          user_id: user.id,
          content: userMessage.content,
          is_user: true,
          conversation_id: conversationId
        });
      }
      
      // KI-Antwort über Edge Function abrufen
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { 
          message: userMessage.content,
          chatHistory: chatHistory.map(msg => ({
            content: msg.content,
            isUser: msg.is_user
          }))
        }
      });
      
      if (error) throw error;
      
      // KI-Antwort zum Chat hinzufügen
      const aiMessage = {
        content: data.response,
        is_user: false,
        created_at: data.timestamp
      };
      
      setChatHistory(prev => [...prev, aiMessage]);
      
      // KI-Antwort in der Datenbank speichern
      if (user) {
        await supabase.from('chat_messages').insert({
          user_id: user.id,
          content: aiMessage.content,
          is_user: false,
          conversation_id: conversationId
        });
      }
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      // Fehlermeldung zum Chat hinzufügen
      setChatHistory(prev => [...prev, {
        content: "Entschuldigung, es gab einen Fehler bei der Verarbeitung deiner Anfrage.",
        is_user: false,
        created_at: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatHistory.length === 0 ? (
          <div className="empty-chat">
            <p>Starte eine Unterhaltung mit dem KI-Assistenten</p>
          </div>
        ) : (
          chatHistory.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.is_user ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-content">{msg.content}</div>
              <div className="message-timestamp">
                {new Date(msg.created_at).toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message ai-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Schreibe eine Nachricht..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !message.trim()}>
          Senden
        </button>
      </form>
    </div>
  );
}
