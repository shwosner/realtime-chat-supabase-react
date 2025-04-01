import { Box, Grid, GridItem, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";

export default function Footer() {
  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      bg="white"
      boxShadow="md"
      py={2}
      px={4}
    >
      <MessageForm />
      
     
    </Box>
  );
}
