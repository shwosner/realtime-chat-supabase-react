import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let mySubscription = null;
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [newMessage, triggerNewMessage] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [routeHash, setRouteHash] = useState("");

  useEffect(() => {
    console.log(`messages changed:`, messages);
  }, [messages]);

  useEffect(() => {
    const user = supabase.auth.user();
    // console.log("user :>> ", user);
    if (user) {
      const username = user.email.split("@")[0];
      setUsername(username);
    } else {
      setIsGuest(true);
      setUsername(`Guest${Date.now().toString().substr(-4)}`);
    }

    supabase.auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", { event, session });
      // if(event === "SIGNED_OUT")
    });
    const { hash, pathname } = window.location;
    if (hash && pathname === "/") {
      console.log("hash", hash);
      setRouteHash(hash);
    }
  }, []);

  const handleSaveNewMessage = (newMessage) => {
    console.log({ newMessage });
    setMessages((prevMessages) => {
      console.log(`prevMessages`, prevMessages);
      // return [prevMessages, newMessage]});
      return prevMessages;
    });
  };
  useEffect(() => {
    console.log(`newMessage trigger`, newMessage);
    // if (!newMessage) return;
    // console.log("newMessage :>> ", newMessage);
    // console.log({ username: newMessage.username, currentUser });
    // if (currentUser && newMessage.username === currentUser) return;
    // setMessages((m) => [...m, newMessage]);
  }, [newMessage]);

  //=========

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .order("id", { ascending: true });

      console.log(`data`, data);
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
    if (!mySubscription) {
      getInitialMessages();
      mySubscription = supabase
        .from("messages")
        .on("*", (payload) => {
          console.log(`payload.new`, payload.new);
          // triggerNewMessage(payload.new);
          // setMessages((m) => [...m, payload.new]);
        })
        .subscribe();
    }
  };

  useEffect(() => {
    getMessagesAndSubscribe();
    return () => {
      supabase.removeSubscription();
      console.log("Remove supabase subscription by useEffect unmount");
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        messages,
        handleSaveNewMessage,
        loadingInitial,
        error,
        getMessagesAndSubscribe,
        username,
        setUsername,
        isGuest,
        routeHash,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
