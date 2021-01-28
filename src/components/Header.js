import { Grid, GridItem, Image } from "@chakra-ui/react";
import NameForm from "./NameForm";

export default function Header({ username, setUsername }) {
  return (
    <Grid templateColumns="1fr 1fr" justifyItems="center" height="53px">
      <GridItem justifySelf="start" m="2">
        <Image src="/rchat_logo.png" height="60px" />
      </GridItem>
      <GridItem justifySelf="end" alignSelf="center" mr="5">
        <NameForm username={username} setUsername={setUsername} />
      </GridItem>
    </Grid>
  );
}
