import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Grid, theme, Container } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import "./App.css";
import { useSupabase } from "./useSupabase";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const { messages, loadingInitial, error } = useSupabase();

  const [username, setUsername] = useState("");
  useEffect(() => {
    const localName = localStorage.getItem("username");
    console.log("localName :>> ", localName);
    setUsername(localName || "Guest");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Grid height="100vh" templateRows="min-content 1fr min-content">
        <Header username={username} setUsername={setUsername} />
        <Box bg="gray.100" height="100%">
          <Container
            maxW="600px"
            mt="5"
            pb="20px"
            display="grid"
            gridTemplateRows="1fr 60px"
          >
            <Box
              bg="white"
              p="5"
              overflow="auto"
              borderRadius="10px"
              height="65vh"
            >
              <Messages
                username={username}
                messages={messages}
                loadingInitial={loadingInitial}
                error={error}
              />
            </Box>
            <MessageForm username={username} />
          </Container>
        </Box>
        <Footer />
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
