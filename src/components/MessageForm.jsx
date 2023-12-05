import { useState } from "react";
import {
  Input,
  Stack,
  IconButton,
  useToast,
  Box,
  Container,
} from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import { useAppContext } from "../context/appContext";
import supabase from "../supabaseClient";

export default function MessageForm() {
  const { username, country, session } = useAppContext();
  const [message, setMessage] = useState("");
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    if (!message) return;

    setMessage("");

    try {
      const { error } = await supabase.from("messages").insert([
        {
          text: message,
          username,
          country,
          is_authenticated: session ? true : false,
        },
      ]);

      if (error) {
        console.error(error.message);
        toast({
          title: "Error sending",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      console.log("Sucsessfully sent!");
    } catch (error) {
      console.log("error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box py="10px" pt="15px" bg="gray.100">
      <Container maxW="600px">
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack direction="row">
            <Input
              name="message"
              placeholder="Enter a message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              bg="white"
              border="none"
              autoFocus
              maxLength="500"
            />
            <IconButton
              // variant="outline"
              colorScheme="teal"
              aria-label="Send"
              fontSize="20px"
              icon={<BiSend />}
              type="submit"
              disabled={!message}
              isLoading={isSending}
            />
          </Stack>
        </form>
        <Box fontSize="10px" mt="1">
          Warning: do not share any sensitive information, it's a public chat
          room 🙂
        </Box>
      </Container>
    </Box>
  );
}
