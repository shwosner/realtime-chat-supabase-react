import { Container, Grid, Image } from "@chakra-ui/react";

export default function AuthContainer(props) {
  return (
    <Grid alignItems="center" height="100%">
      <Container bg="white" px="10" pb="10" width="350px">
        <Image py="3" m="auto" src="/rchat_logo.png" height="100px" />
        {props.children}
      </Container>
    </Grid>
  );
}
