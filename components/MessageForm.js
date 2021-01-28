import React, { useState } from "react";
import { Input, Stack, IconButton, useToast } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import { useSupabase } from "../src/useSupabase";
// import { sendMessage } from "./useSupabase";

export default function MessageForm({ username }) {
  const { sendMessage } = useSupabase();
  const [message, setMessage] = useState("");
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);
  // useEffect(() => {
  //   console.log("message :>> ", message);
  // }, [message]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    if (!message) return;
    sendMessage({ text: message, username })
      .then(({ data, error }) => {
        console.log("Sucsessfully sent!");
        // console.log({ data, error });
        setMessage("");
      })
      .catch((error) => {
        console.log("error sending message:", error);
        toast({
          title: "Error sending",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Stack direction="row" bg="gray.100" mt="5">
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
  );
}
