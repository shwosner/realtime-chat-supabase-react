import { Button, Grid, GridItem, Image } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
import NameForm from "./NameForm";
export default function Header() {
  const { username, setUsername, isGuest, auth } = useAppContext();
  return (
    <Grid
      templateColumns="max-content 1fr 80px"
      justifyItems="center"
      alignItems="center"
      height="93px"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #edf2f7"
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
          <div
            style={{
              paddingBottom: 7,
              cursor: "not-allowed",
              color: "lightgray",
            }}
          >
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
