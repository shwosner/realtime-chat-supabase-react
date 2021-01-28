import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Container,
  Image,
  GridItem,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MessageForm from "../components/MessageForm";
import Messages from "../components/Messages";
import "./App.css";
import NameForm from "../components/NameForm";
import { useSupabase } from "./useSupabase";
function App() {
  const { messages, loadingInitial } = useSupabase();

  const [username, setUsername] = useState("");
  useEffect(() => {
    const localName = localStorage.getItem("username");
    console.log("localName :>> ", localName);
    setUsername(localName || "Guest");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Grid height="100vh" templateRows="min-content auto">
        <Grid templateColumns="1fr 1fr" justifyItems="center">
          <GridItem justifySelf="start" m="2">
            <Image src="/rchat_logo.png" height="60px" />
          </GridItem>
          <GridItem justifySelf="end" alignSelf="center" mr="5">
            <NameForm username={username} setUsername={setUsername} />
          </GridItem>
        </Grid>
        <Box bg="gray.100">
          <Container
            maxW="600px"
            mt="5"
            display="grid"
            gridTemplateRows="1fr 60px"
            height="96%"
            pb="12px"
          >
            <Box bg="white" p="5" overflow="auto" borderRadius="10px">
              <Messages
                username={username}
                messages={messages}
                loadingInitial={loadingInitial}
              />
            </Box>
            <MessageForm username={username} />
          </Container>
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

{
  /* <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */
}
