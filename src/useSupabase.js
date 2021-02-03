import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabase = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);

  const [newMessage, handleNewMessage] = useState("");
  let mySubscription = null;
  useEffect(() => {
    if (newMessage) {
      // console.log("newMessage :>> ", newMessage);
      setMessages((m) => [...m, newMessage]);
    }
  }, [newMessage]);

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase.from("messages").select();
      setLoadingInitial(false);
      if (error) {
        setError(error.message);
        supabase.removeSubscription(mySubscription);
        mySubscription = null;
        return;
      }
      setMessages(data);
    }
  };

  const getMessagesAndSubscribe = async () => {
    setError("");
    getInitialMessages();
    if (!mySubscription) {
      mySubscription = supabase
        .from("messages")
        .on("*", (payload) => {
          handleNewMessage(payload.new);
        })
        .subscribe();
    }
  };

  useEffect(() => {
    // console.log("useSupabase() effect ran!");
    getMessagesAndSubscribe();
    return () => {
      supabase.removeSubscription();
      console.log("Remove supabase subscription by useEffect unmount");
    };
  }, []);
  return {
    messages,
    loadingInitial,
    error,
    getMessagesAndSubscribe,
  };
};
export const auth = supabase.auth;
export default supabase;
