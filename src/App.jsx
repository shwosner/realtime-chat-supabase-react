import { ChakraProvider, Box, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContextProvider, useAppContext } from "./context/appContext";

function App() {
  const { username, setUsername, routeHash } = useAppContext();

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
      <AppContextProvider>
        <Box bg="gray.100">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Router>
            <Switch>
              <Route exact path="/">
                <Header username={username} setUsername={setUsername} />
                <Chat username={username} />
                <Footer username={username} />
              </Route>
              <Route>Not found</Route>
            </Switch>
          </Router>
        </Box>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
