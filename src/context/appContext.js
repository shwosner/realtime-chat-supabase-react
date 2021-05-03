import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let mySubscription = null;
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [sliceCount, setSliceCount] = useState(10);
  const [slicedMessages, setSlicedMessages] = useState([]);
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  const [routeHash, setRouteHash] = useState("");

  // useEffect(() => {
  //   console.log(`messages changed:`, messages);
  // }, [messages]);

  // useEffect(() => {
  //   if (!messages.length) return;
  //   setSlicedMessages(messages.reverse().slice(0, sliceCount).reverse());
  // }, [ sliceCount]);

  useEffect(() => {
    getMessagesAndSubscribe();

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

    return () => {
      supabase.removeSubscription();
      console.log("Remove supabase subscription by useEffect unmount");
    };
  }, []);

  const handleSaveNewMessage = async (newMessage) => {
    console.log({ newMessage });
    // setMessages((prevMessages) => {
    //   console.log(`prevMessages`, prevMessages);
    //   // return [prevMessages, newMessage]});
    //   return prevMessages;
    // });
    const { error } = await supabase.from("messages").insert([newMessage]);
    if (error) console.log(`error`, error);
  };

  // useEffect(() => {
  //   console.log(`newMessage trigger`, newMessage);
  // if (!newMessage) return;
  // console.log("newMessage :>> ", newMessage);
  // console.log({ username: newMessage.username, currentUser });
  // if (currentUser && newMessage.username === currentUser) return;
  // setMessages((m) => [...m, newMessage]);
  // }, [newMessage]);

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
      setSlicedMessages(data.reverse().slice(0, sliceCount).reverse());
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
          setSlicedMessages((prevSliced) => [...prevSliced, payload.new]);
          setMessages((prevMessages) => [...prevMessages, payload.new]);
        })
        .subscribe();
    }
  };

  // useEffect(() => {
  //   setSlicedMessages(messages.reverse().slice(0, sliceCount).reverse());
  // }, [messages]);
  const removeSlice = () => {
    setSliceCount(messages.length);
    setSlicedMessages(messages.reverse());
  };

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        messages,
        slicedMessages,
        handleSaveNewMessage,
        loadingInitial,
        error,
        getMessagesAndSubscribe,
        username,
        setUsername,
        isGuest,
        routeHash,
        removeSlice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
