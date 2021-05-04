import { Badge, Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Messages from "./Messages";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Chat() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const { scrollRef, onScroll, scrollToBottom, isOnBottom } = useAppContext();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
      console.log("resize");
    });
  }, []);

  return (
    <Container maxW="600px" pb="20px">
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height={height}
        onScroll={onScroll}
        ref={scrollRef}
      >
        <Messages />
        {!isOnBottom && (
          <BsChevronDoubleDown
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              bottom: 8,
              // right: 0,
              float: "right",
              cursor: "pointer",
            }}
            onClick={scrollToBottom}
          />
        )}
        {/* <Badge ml="1" fontSize="0.8em" colorScheme="green">
          New
        </Badge> */}
      </Box>
    </Container>
  );
}
