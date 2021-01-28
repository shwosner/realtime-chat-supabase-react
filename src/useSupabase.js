import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabase = () => {
  const [messages, setMessages] = useState([]);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const [newMessage, handleNewMessage] = useState();
  const [messageListener, setMessageListener] = useState(null);

  const sendMessage = async ({ username, text }) => {
    return await supabase.from("messages").insert([{ text, username }]);
  };

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase.from("messages").select();
      setMessages(data);
      setLoadingInitial(false);
    }
  };
  useEffect(() => {
    newMessage && setMessages([...messages, newMessage]);
  }, [newMessage]);

  const getMessagesAndSubscribe = async () => {
    getInitialMessages();
    if (!messageListener) {
      setMessageListener(
        supabase
          .from("messages")
          .on("*", (payload) => handleNewMessage(payload.new))
          .subscribe()
      );
    }
  };

  useEffect(() => {
    console.log("useSupabase() effect ran!");
    getMessagesAndSubscribe();
    return () => {
      supabase.removeSubscription();
      console.log("Remove supabase subscription by useEffect unmount");
    };
  }, []);
  return { messages, sendMessage, loadingInitial };
};

// export default supabase;
