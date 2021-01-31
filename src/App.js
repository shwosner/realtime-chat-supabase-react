import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Grid, theme, Button } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupEmailForm from "./auth/SignupEmailForm";
import LoginWithEmail from "./auth/LoginWithEmailForm";
import { auth } from "./useSupabase";
import ResetPassword from "./auth/ResetPassword";

function App() {
  const [username, setUsername] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const [routeHash, setRouteHash] = useState("");
  // const testUpdateUser = async () => {
  //   const { user, error } = await auth.update({
  //     data: { hello: "world" },
  //   });
  // };

  useEffect(() => {
    const user = auth.user();
    // console.log("user :>> ", user);
    if (user) {
      const username = user.email.split("@")[0];
      setUsername(username);
    } else {
      setIsGuest(true);
      setUsername(`Guest${Date.now().toString().substr(-4)}`);
    }

    auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", { event, session });
      // if(event === "SIGNED_OUT")
    });
    const { hash, pathname } = window.location;
    if (hash && pathname === "/") {
      console.log("hash", hash);
      setRouteHash(hash);
    }
  }, []);

  if (routeHash) {
    if (routeHash.endsWith("&type=recovery")) {
      window.location.replace(`/login/${routeHash}`);
    }
    if (routeHash.startsWith("#error_code=404"))
      return (
        <div>
          <p>This link has expired</p>
          <a href="/" style={{ cursor: "pointer" }} variant="link">
            Back to app
          </a>
        </div>
      );
  }
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.100" h="100vh">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <Router>
          <Switch>
            <Route
              exact
              path="#error_code=404&error_description=User+not+found"
            >
              <LoginWithEmail />
            </Route>
            <Route exact path="/signup">
              <SignupEmailForm />
            </Route>
            <Route exact path="/login">
              <LoginWithEmail />
            </Route>
            <Route exact path="/reset-password">
              <ResetPassword />
            </Route>
            <Route exact path="/">
              <Grid templateRows="min-content 1fr">
                <Header
                  isGuest={isGuest}
                  username={username}
                  setUsername={setUsername}
                />
                <Box height="100%">
                  <Chat username={username} />
                </Box>
              </Grid>
              <Footer />
            </Route>
            <Route>Not found</Route>
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
