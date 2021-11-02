import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let mySubscription = null;
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [routeHash, setRouteHash] = useState("");
  const [isOnBottom, setIsOnBottom] = useState(false);
  const [newIncomingMessageTrigger, setNewIncomingMessageTrigger] =
    useState(null);
  const [unviewedMessageCount, setUnviewedMessageCount] = useState(0);
  const [countryCode, setCountryCode] = useState("");

  const getLocation = async () => {
    try {
      const res = await fetch("https://api.db-ip.com/v2/free/self");
      const { countryCode, error } = await res.json();
      if (error) throw new Error(error);

      setCountryCode(countryCode);
      localStorage.setItem("countryCode", countryCode);
    } catch (error) {
      console.error(
        `error getting location from api.db-ip.com:`,
        error.message
      );
    }
  };

  const randomUsername = () => {
    return `@user${Date.now().toString().substr(-4)}`;
  };
  const initializeUser = () => {
    const user = supabase.auth.user();
    let username;
    if (user) {
      username = user.user_metadata.user_name;
    } else {
      username = localStorage.getItem("username") || randomUsername();
    }
    setUsername(username);
    localStorage.setItem("username", username);
  };

  useEffect(() => {
    initializeUser();
    getMessagesAndSubscribe();

    // const storedUser = localStorage.getItem("username");
    // if (storedUser) setUsername(storedUser);
    // else setUsername(`@user${Date.now().toString().substr(-4)}`);

    const storedCountryCode = localStorage.getItem("countryCode");
    if (storedCountryCode && storedCountryCode !== "undefined")
      setCountryCode(storedCountryCode);
    else getLocation();

    supabase.auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", { event, session });
      if (event === "SIGNED_IN") initializeUser();
    });
    // const { hash, pathname } = window.location;
    // if (hash && pathname === "/") {
    //   console.log("hash", hash);
    //   setRouteHash(hash);
    // }

    return () => {
      supabase.removeSubscription();
      console.log("Remove supabase subscription by useEffect unmount");
    };
  }, []);

  useEffect(() => {
    if (newIncomingMessageTrigger?.username === username) scrollToBottom();
    else setUnviewedMessageCount((prevCount) => prevCount + 1);
  }, [newIncomingMessageTrigger]);

  const handleNewMessage = (payload) => {
    setMessages((prevMessages) => [payload.new, ...prevMessages]);
    //* needed to trigger react state because I need access to the username state
    setNewIncomingMessageTrigger(payload.new);
  };

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .range(0, 49)
        .order("id", { ascending: false });
      // console.log(`data`, data);
      setLoadingInitial(false);
      if (error) {
        setError(error.message);
        supabase.removeSubscription(mySubscription);
        mySubscription = null;
        return;
      }
      setMessages(data);
      scrollToBottom();
    }
  };

  const getMessagesAndSubscribe = async () => {
    setError("");
    if (!mySubscription) {
      getInitialMessages();
      mySubscription = supabase
        .from("messages")
        .on("*", (payload) => {
          handleNewMessage(payload);
        })
        .subscribe();
    }
  };

  const scrollRef = useRef();
  const onScroll = async ({ target }) => {
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
      setUnviewedMessageCount(0);
      setIsOnBottom(true);
    } else {
      setIsOnBottom(false);
    }

    //* Load more messages when reaching top
    if (target.scrollTop === 0) {
      // console.log("messages.length :>> ", messages.length);
      const { data, error } = await supabase
        .from("messages")
        .select()
        .range(messages.length, messages.length + 49)
        .order("id", { ascending: false });
      if (error) {
        setError(error.message);
        return;
      }
      target.scrollTop = 1;
      setMessages((prevMessages) => [...prevMessages, ...data]);
    }
  };

  const scrollToBottom = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        messages,
        loadingInitial,
        error,
        getMessagesAndSubscribe,
        username,
        setUsername,
        randomUsername,
        routeHash,
        scrollRef,
        onScroll,
        scrollToBottom,
        isOnBottom,
        country: countryCode,
        unviewedMessageCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
