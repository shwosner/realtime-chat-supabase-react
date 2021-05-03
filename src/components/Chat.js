import { Badge, Box, Container } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useAppContext } from "../context/appContext";
import Messages from "./Messages";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Chat() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const { removeSlice } = useAppContext();
  const scrollRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
      console.log("resize");
    });
  }, []);

  const onScroll = () => {
    // console.log("scrollTop", scrollRef.current.scrollTop);
    if (scrollRef.current.scrollTop < 100) removeSlice();
    // setSliceCount(sliceCount + 10);
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // console.log(`scrollRef.scrollHeight`, scrollRef.scrollTop, scrollRef);
  };

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
        {/* <Badge ml="1" fontSize="0.8em" colorScheme="green">
          New
        </Badge> */}
      </Box>
    </Container>
  );
}
