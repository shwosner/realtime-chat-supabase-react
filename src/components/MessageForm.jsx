import { useState } from "react";
import { Input, Stack, IconButton, Box, Container } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { BiSend } from "react-icons/bi";
import { useAppContext } from "../context/appContext";
import supabase from "../supabaseClient";

export default function MessageForm() {
  const { username, country, session } = useAppContext();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) return;

    setIsSending(true);

    try {
      const { error } = await supabase.from("messages").insert([
        {
          text: trimmed,
          username,
          country,
          is_authenticated: !!session,
        },
      ]);

      if (error) {
        console.error(error.message);
        toaster.create({
          title: "Error sending",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          color: "white",
          background: "#ef4444",
        });
        return;
      }

      setMessage("");
      console.log("Successfully sent!");
    } catch (error) {
      console.log("Error sending message:", error);
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
              color= "black"
            />
            <IconButton
              background="teal"
              colorScheme="teal"
              aria-label="Send"
              fontSize="20px"
              type="submit"
              disabled={!message.trim()}
              isLoading={isSending}
            >
              <BiSend />
            </IconButton>
          </Stack>
        </form>
        <Box fontSize="10px" mt="1">
          Warning: do not share any sensitive information, it’s a public chat
          room 🙂
        </Box>
      </Container>
    </Box>
  );
}
