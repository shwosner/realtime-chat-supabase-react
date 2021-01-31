import React, { useState } from "react";
import { Input, Stack, IconButton, useToast, Box } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import { useSupabase } from "../useSupabase";

export default function MessageForm({ username }) {
  const { sendMessage } = useSupabase();
  const [message, setMessage] = useState("");
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    if (!message) return;
    sendMessage({ text: message, username })
      .then(({ data, error }) => {
        // console.log({ data, error });
        if (error) {
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
        setMessage("");
      })
      .catch((error) => {
        console.log("error sending message:", error);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <Box mt="5">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack direction="row" bg="gray.100">
          <Input
            name="message"
            placeholder="Enter a message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            bg="white"
            border="none"
            autoFocus
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
        Warning: do not share any sensitive information, it's a public chat room
        🙂
      </Box>
    </Box>
  );
}
