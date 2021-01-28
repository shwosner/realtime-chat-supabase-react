import { Alert, Box, Spinner } from "@chakra-ui/react";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import Message from "./Message";

export default function Messages({ username, messages, loadingInitial }) {
  if (loadingInitial)
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  return (
    <>
      {messages.length ? (
        messages.map((message) => {
          const isYou = message.username === username;
          return (
            <div key={message.id}>
              <Message message={message} isYou={isYou} />
              <AlwaysScrollToBottom />
            </div>
          );
        })
      ) : (
        <Box as="h3" textAlign="center">
          No messages 😞
        </Box>
      )}
      {/* {hasStreamError && (
        <Alert status="error" mt="20px">
          Disconnected from server
          <Button
            ml="5px"
            // onClick={connectToStream}
            colorScheme="red"
            variant="link"
          >
            try to reconnect
          </Button>
        </Alert>
      )} */}
    </>
  );
  // return (
  //   <Box
  //     // mt="4"
  //     bg="white"
  //     p="5"
  //     // height="md"
  //     // height="26rem"
  //     // height="100%"
  //     overflow="auto"
  //     borderRadius="10px"
  //   >
  //     {messages.length
  //       ? messages.map((message, index) => {
  //           const isYou = message.username === username;
  //           return <Message key={index} message={message} isYou={isYou} />;
  //         })
  //       : "No messages"}
  //     <AlwaysScrollToBottom />
  //   </Box>
  // );
}
