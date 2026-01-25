import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import supabase from "../supabaseClient";

const AppContext = createContext({});

// Constants
const MESSAGES_PER_PAGE = 49;
const CHAT_CHANNEL_NAME = "custom-all-channel";
const LOCATION_API_URL = "https://api.db-ip.com/v2/free/self";
const SCROLL_THRESHOLD = 1; // pixels from bottom to consider "at bottom"

const AppContextProvider = ({ children }) => {
  // Refs
  const myChannelRef = useRef(null);
  const hasInitializedRef = useRef(false);
  const scrollRef = useRef();

  // User state
  const [username, setUsername] = useState("");
  const [session, setSession] = useState(null);
  const [countryCode, setCountryCode] = useState("");

  // Messages state
  const [messages, setMessages] = useState([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [error, setError] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [newIncomingMessageTrigger, setNewIncomingMessageTrigger] = useState(null);

  // UI state
  const [isOnBottom, setIsOnBottom] = useState(false);
  const [unviewedMessageCount, setUnviewedMessageCount] = useState(0);
  const [routeHash, setRouteHash] = useState("");

  // Scroll utilities
  const scrollToBottom = useCallback(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, []);

  // Scroll to bottom when initial messages are loaded
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      scrollToBottom();
    }
  }, [messages, isInitialLoad, scrollToBottom]);

  // User utilities
  const randomUsername = useCallback(() => {
    return `@user${Date.now().toString().slice(-4)}`;
  }, []);

  const getLocation = useCallback(async () => {
    try {
      const res = await fetch(LOCATION_API_URL);
      const { countryCode, error } = await res.json();
      if (error) throw new Error(error);

      setCountryCode(countryCode);
      localStorage.setItem("countryCode", countryCode);
    } catch (error) {
      console.error("Error getting location:", error.message);
    }
  }, []);

  const initializeUser = useCallback((session) => {
    setSession(session);

    const username = session
      ? session.user.user_metadata.user_name
      : localStorage.getItem("username") || randomUsername();

    setUsername(username);
    localStorage.setItem("username", username);
  }, [randomUsername, setSession, setUsername]);

  // Message handlers
  const handleNewMessage = useCallback((payload) => {
    setMessages((prevMessages) => [payload.new, ...prevMessages]);
    // Trigger effect to check if we should scroll or show notification
    setNewIncomingMessageTrigger(payload.new);
  }, []);

  const getInitialMessages = useCallback(async () => {
    if (messages.length) return;

    const { data, error } = await supabase
      .from("messages")
      .select()
      .range(0, MESSAGES_PER_PAGE)
      .order("id", { ascending: false });

    setLoadingInitial(false);
    if (error) {
      setError(error.message);
      return;
    }

    setIsInitialLoad(true);
    setMessages(data);
  }, [messages.length]);

  const createChannelSubscription = useCallback(() => {
    if (myChannelRef.current) return;

    myChannelRef.current = supabase
      .channel(CHAT_CHANNEL_NAME)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        handleNewMessage
      )
      .subscribe();
  }, [handleNewMessage]);

  const getMessagesAndSubscribe = useCallback(async () => {
    setError("");
    await getInitialMessages();
    createChannelSubscription();
  }, [getInitialMessages, createChannelSubscription]);

  // Initialize app: auth, messages, location, and subscriptions
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    // Initialize user session
    supabase.auth.getSession().then(({ data: { session } }) => {
      initializeUser(session);
    });

    // Load messages and subscribe to real-time updates
    getMessagesAndSubscribe();

    // Load country code from localStorage or fetch from API
    const storedCountryCode = localStorage.getItem("countryCode");
    if (storedCountryCode && storedCountryCode !== "undefined") {
      setCountryCode(storedCountryCode);
    } else {
      getLocation();
    }

    // Listen for auth state changes
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("onAuthStateChange", { _event, session });
      initializeUser(session);
    });

    return () => {
      // Cleanup: remove channel subscription
      if (myChannelRef.current) {
        supabase.removeChannel(myChannelRef.current);
        myChannelRef.current = null;
      }

      authSubscription.unsubscribe();
      hasInitializedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle new incoming messages: scroll if from current user, otherwise show notification
  useEffect(() => {
    if (!newIncomingMessageTrigger) return;

    if (newIncomingMessageTrigger.username === username) {
      scrollToBottom();
    } else {
      setUnviewedMessageCount((prevCount) => prevCount + 1);
    }
  }, [newIncomingMessageTrigger, username, scrollToBottom]);

  // Handle scroll events: detect bottom position and load more messages at top
  const onScroll = async ({ target }) => {
    const isAtBottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + SCROLL_THRESHOLD;

    if (isAtBottom) {
      setUnviewedMessageCount(0);
      setIsOnBottom(true);
    } else {
      setIsOnBottom(false);
    }

    // Load more messages when scrolling to top
    if (target.scrollTop === 0) {
      const { data, error } = await supabase
        .from("messages")
        .select()
        .range(messages.length, messages.length + MESSAGES_PER_PAGE)
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
        return;
      }

      // Maintain scroll position after loading
      target.scrollTop = 1;
      setMessages((prevMessages) => [...prevMessages, ...data]);
    }
  };

  return (
    <AppContext.Provider
      value={{
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
        session,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
