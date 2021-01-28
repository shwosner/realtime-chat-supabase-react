import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
// import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export default function Message({ message, isYou }) {
  return (
    <Box display="grid" justifyItems={isYou ? "end" : "start"}>
      <Grid
        templateColumns="1fr 1fr"
        templateRows="30px 1fr"
        w="70%"
        px="3"
        py="2"
        borderRadius="5px"
        borderTopLeftRadius={isYou ? "5px" : "0"}
        borderTopRightRadius={isYou ? "0" : "5px"}
        bg="gray.100"
        mt="5"
        position="relative"
        _after={{
          position: "absolute",
          content: "''",
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: isYou ? "0px 0px 10px 10px" : "0px 10px 10px 0",
          // borderWidth: "0px 0px 10px 10px",
          borderColor: isYou
            ? "transparent transparent transparent #EDF2F7"
            : "transparent #EDF2F7 transparent transparent",
          top: 0,
          left: isYou ? "auto" : "-10px",
          right: isYou ? "-10px" : "auto",
        }}
      >
        <GridItem
          fontWeight="500"
          fontSize="md"
          justifySelf="start"
          colSpan={2}
          color="gray.500"
          mb="2"
        >
          {isYou ? "You" : message.username}
        </GridItem>
        <GridItem
          justifySelf="start"
          textAlign="left"
          wordBreak="break-word"
          fontSize="md"
        >
          {message.text}
        </GridItem>
        <GridItem fontSize="sm" justifySelf="end" alignSelf="end">
          {/* {dayjs(message.timestamp).fromNow()} */}
          {new Date(message.timestamp).toLocaleTimeString()}
        </GridItem>
      </Grid>
    </Box>
  );
}
