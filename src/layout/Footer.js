import { Grid, GridItem } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <Grid
      gridTemplateColumns="auto 1fr"
      textAlign="center"
      alignItems="center"
      py="4px"
      px="15px"
      height="40px"
      bg="white"
      position="absolute"
      bottom="0"
      width="100%"
    >
      <GridItem justifySelf="start">
        Built by{" "}
        <a>
          <b>Shimon Wosner</b>
        </a>
      </GridItem>
      <GridItem justifySelf="end">
        <a
          href="https://github.com/shwosner/realtime-chat-supabase-react"
          target="_blank"
        >
          <FaGithub style={{ display: "inline" }} /> Source code
        </a>
      </GridItem>
    </Grid>
  );
}
