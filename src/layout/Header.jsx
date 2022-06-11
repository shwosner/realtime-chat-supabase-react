import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FaGithub, FaGitlab } from "react-icons/fa";

import { useAppContext } from "../context/appContext";
import NameForm from "./NameForm";
export default function Header() {
  const { username, setUsername, auth, randomUsername } = useAppContext();
  return (
    <Grid
      templateColumns="max-content 1fr min-content"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #edf2f7"
    >
      <GridItem justifySelf="start" m="2">
        <Image src="/logo.png" height="30px" ml="2" />
      </GridItem>
      {auth.user() ? (
        <>
          <GridItem justifySelf="end" alignSelf="center" mr="4">
            Welcome <strong>{username}</strong>
          </GridItem>
          <Button
            marginRight="4"
            size="sm"
            variant="link"
            onClick={() => {
              const { error } = auth.signOut();
              if (error) return console.error("error signOut", error);
              const username = randomUsername();
              setUsername(username);
              localStorage.setItem("username", username);
            }}
          >
            Log out
          </Button>
        </>
      ) : (
        <>
          <GridItem justifySelf="end" alignSelf="end">
            <NameForm username={username} setUsername={setUsername} />
          </GridItem>
          <Popover>
            <PopoverTrigger>
              <Button
                size="sm"
                marginRight="2"
                colorScheme="teal"
                variant="outline"
              >
                Login/Signup
              </Button>
            </PopoverTrigger>

            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    size="sm"
                    marginRight="2"
                    colorScheme="teal"
                    rightIcon={<FaGithub />}
                    variant="outline"
                    onClick={() =>
                      auth.signIn({
                        provider: "github",
                      })
                    }
                  >
                    Login
                  </Button>

                  <Button
                    size="sm"
                    marginRight="2"
                    colorScheme="teal"
                    rightIcon={<FaGitlab />}
                    variant="outline"
                    onClick={() =>
                      auth.signIn({
                        provider: "gitlab",
                      })
                    }
                  >
                    Login
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </>
      )}
    </Grid>
  );
}
