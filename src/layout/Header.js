import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NameForm from "./NameForm";
import { auth } from "../useSupabase";
export default function Header({ username, setUsername, isGuest }) {
  return (
    <Grid
      templateColumns="max-content 1fr 80px"
      justifyItems="center"
      alignItems="center"
      height="73px"
      bg="white"
    >
      <GridItem justifySelf="start" m="2">
        <Image src="/rchat_logo.png" height="60px" />
      </GridItem>
      <GridItem justifySelf="end" alignSelf="center">
        {isGuest && <NameForm username={username} setUsername={setUsername} />}
        {!isGuest && (
          <>
            Welcome <strong>{username}</strong>
          </>
        )}
      </GridItem>
      <GridItem>
        {isGuest ? (
          <div style={{ paddingBottom: 7, cursor: "not-allowed" }}>
            Login
            {/* <Link style={{ paddingBottom: "5px" }} to="/login">
              Login
            </Link> */}
          </div>
        ) : (
          <Button
            pb="3px"
            variant="link"
            onClick={() => {
              const { error } = auth.signOut();
              if (error) console.log("error signOut", error);
            }}
          >
            Log out
          </Button>
        )}
      </GridItem>
    </Grid>
  );
}
