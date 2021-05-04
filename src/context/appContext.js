import { createContext, useContext, useEffect, useRef, useState } from "react";
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
  const [isOnBottom, setIsOnBottom] = useState(false);
  const [newIncomingMessageTrigger, setNewIncomingMessageTrigger] = useState(
    null
  );
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const res = await fetch("https://api.db-ip.com/v2/free/self");
      const resJSON = await res.json();
      // console.log(`resJSON`, resJSON);
      setLocation(resJSON);
    } catch (error) {
      console.log(`error getting location`, error);
    }
  };
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  //       console.log({ latitude, longitude });
  //     });
  //   }
  // }, [navigator.geolocation]);
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (!messages.length) return;
    setSlicedMessages(messages.slice(0, sliceCount).reverse());
  }, [sliceCount]);

  useEffect(() => {
    getMessagesAndSubscribe();

    // const user = supabase.auth.user();
    const user = localStorage.getItem("username");
    if (user) {
      // const username = user.email.split("@")[0];
      setUsername(user);
    } else {
      setIsGuest(true);
      setUsername(`@rtc${Date.now().toString().substr(-4)}`);
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

  useEffect(() => {
    if (newIncomingMessageTrigger?.username === username) scrollToBottom();
  }, [newIncomingMessageTrigger]);

  const handleNewMessage = (payload) => {
    //* Sliced messages are already reversed
    setSlicedMessages((prevSliced) => [...prevSliced, payload.new]);
    setMessages((prevMessages) => [payload.new, ...prevMessages]);
    //* needed to trigger react state because I need access to the username state
    setNewIncomingMessageTrigger(payload.new);
  };

  const getInitialMessages = async () => {
    if (!messages.length) {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .order("id", { ascending: false });
      // console.log(`data`, data);
      setLoadingInitial(false);
      if (error) {
        setError(error.message);
        supabase.removeSubscription(mySubscription);
        mySubscription = null;
        return;
      }
      setSlicedMessages(data.slice(0, sliceCount).reverse());
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

  const onScroll = ({ target }) => {
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setIsOnBottom(true);
    } else {
      setIsOnBottom(false);
    }
    //* Load more messages when reaching top
    if (scrollRef.current.scrollTop < 100) setSliceCount(sliceCount + 10);
    //* This is a fix if user quickly scrolls to top
    if (scrollRef.current.scrollTop === 0) scrollRef.current.scrollTop = 10;
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
        slicedMessages,
        loadingInitial,
        error,
        getMessagesAndSubscribe,
        username,
        setUsername,
        isGuest,
        routeHash,
        scrollRef,
        onScroll,
        scrollToBottom,
        isOnBottom,
        country: location?.countryCode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
