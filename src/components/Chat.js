import { Box, Container } from "@chakra-ui/react";
import { useSupabase } from "../useSupabase";
import Messages from "./Messages";

export default function Chat({ username }) {
  const { messages, loadingInitial, error } = useSupabase();

  return (
    <Container maxW="600px" pb="20px">
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height="calc(100vh - 205px)"
      >
        <Messages
          username={username}
          messages={messages}
          loadingInitial={loadingInitial}
          error={error}
        />
      </Box>
    </Container>
  );
}
