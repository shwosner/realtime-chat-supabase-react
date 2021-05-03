import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Messages from "./Messages";

export default function Chat() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
    });
  }, []);
  return (
    <Container maxW="600px" pb="20px">
      <Box bg="white" p="5" overflow="auto" borderRadius="10px" height={height}>
        <Messages />
      </Box>
    </Container>
  );
}
