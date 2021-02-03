import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSupabase } from "../useSupabase";
import Messages from "./Messages";

export default function Chat({ username }) {
  const { messages, loadingInitial, error } = useSupabase();
  const [height, setHeight] = useState(window.innerHeight - 205);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
      //  const height2 = window.outerHeight;
    });
  }, []);
  return (
    <Container maxW="600px" pb="20px">
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        // height="calc(100vh - 205px)"
        // height="calc(100vh - 270px)"
        // height="calc(829px - 205px)"
        height={height}
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
