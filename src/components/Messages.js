import { Alert, Box, Button, Spinner } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import Message from "./Message";

export default function Messages() {
  const {
    username,
    messages,
    loadingInitial,
    error,
    getMessagesAndSubscribe,
  } = useAppContext();
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
  return (
    <>
      {messages.length ? (
        messages.map((message) => {
          const isYou = message.username === username;
          return (
            <div key={message.id}>
              <Message message={message} isYou={isYou} />
              <AlwaysScrollToBottom />
            </div>
          );
        })
      ) : (
        <Box as="h3" textAlign="center">
          No messages 😞
        </Box>
      )}
    </>
  );
}
