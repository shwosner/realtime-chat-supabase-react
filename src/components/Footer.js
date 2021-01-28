import { Grid, GridItem } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      textAlign="center"
      alignItems="center"
      py="4px"
      px="15px"
      height="30px"
    >
      <GridItem justifySelf="start">
        Built by{" "}
        <a href="#">
          <b>Shimon Wosner</b>
        </a>
      </GridItem>
      <GridItem justifySelf="end">
        <a
          href="https://github.com/shwosner/realtime-chat-supabase-react"
          target="_blank"
        >
          <FaGithub style={{ display: "inline" }} /> Repository
        </a>
      </GridItem>
    </Grid>
  );
}
