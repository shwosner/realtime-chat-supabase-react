import { Alert, Box, Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import Message from "./Message";

export default function Messages() {
  const {
    username,
    loadingInitial,
    error,
    getMessagesAndSubscribe,
    slicedMessages,
  } = useAppContext();

  useEffect(() => {
    console.log(`slicedMessages changed:`, slicedMessages);
  }, [slicedMessages]);

  if (loadingInitial)
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  if (error)
    return (
      <Alert status="error" mt="20px">
        {error}
        <Button
          ml="5px"
          onClick={getMessagesAndSubscribe}
          colorScheme="red"
          variant="link"
        >
          try to reconnect
        </Button>
      </Alert>
    );

  if (!slicedMessages.length)
    return (
      <Box as="h3" textAlign="center">
        No messages 😞
      </Box>
    );

  return slicedMessages.map((message) => {
    const isYou = message.username === username;
    return (
      <div key={message.id}>
        <Message message={message} isYou={isYou} />
        <AlwaysScrollToBottom />
      </div>
    );
  });
}
