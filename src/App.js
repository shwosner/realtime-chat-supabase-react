import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import SignupEmailForm from "./components/SignupEmailForm";
import LoginWithEmail from "./components/LoginWithEmailForm";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localName = localStorage.getItem("username");
    console.log("localName :>> ", localName);
    setUsername(localName || "Guest");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.100" h="100vh">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Router>
          <Switch>
            <Route exact path="/signup">
              <SignupEmailForm />
            </Route>
            <Route exact path="/login">
              <LoginWithEmail />
            </Route>
            <Route exact path="/">
              <Grid templateRows="min-content 1fr min-content">
                <Header username={username} setUsername={setUsername} />
                <Box height="100%">
                  <Chat username={username} isLoggedIn={isLoggedIn} />
                </Box>
                <Footer />
              </Grid>
            </Route>
            <Route>Not found</Route>
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
