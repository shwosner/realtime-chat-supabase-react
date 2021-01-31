import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabase = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  const [newMessage, handleNewMessage] = useState();
  // const [messageListener, setMessageListener] = useState(null);
  let mySubscription = null;

  const sendMessage = async ({ username, text }) => {
    return await supabase.from("messages").insert([{ text, username }]);
  };

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase.from("messages").select();
      setLoadingInitial(false);
      if (error) {
        // console.log("error :>> ", error);
        setError(error.message);
        supabase.removeSubscription(mySubscription);
        mySubscription = null;
        return;
      }
      setMessages(data);
    }
  };
  useEffect(() => {
    newMessage && setMessages([...messages, newMessage]);
  }, [newMessage]);

  const getMessagesAndSubscribe = async () => {
    setError("");
    getInitialMessages();
    if (!mySubscription) {
      mySubscription = supabase
        .from("messages")
        .on("*", (payload) => handleNewMessage(payload.new))
        .subscribe();
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
  return {
    messages,
    sendMessage,
    loadingInitial,
    error,
    getMessagesAndSubscribe,
  };
};
export const auth = supabase.auth;
export default supabase;
