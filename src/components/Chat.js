import { Box, Container } from "@chakra-ui/react";
import { useSupabase } from "../useSupabase";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

export default function Chat({ username }) {
  const { messages, loadingInitial, error } = useSupabase();

  return (
    <Container
      maxW="600px"
      my="5"
      pb="20px"
      display="grid"
      gridTemplateRows="1fr 60px"
    >
      <Box bg="white" p="5" overflow="auto" borderRadius="10px" height="62vh">
        <Messages
          username={username}
          messages={messages}
          loadingInitial={loadingInitial}
          error={error}
        />
      </Box>
      <MessageForm username={username} />
    </Container>
  );
}
