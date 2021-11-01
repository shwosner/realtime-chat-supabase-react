import { Box, Grid, GridItem } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Message({ message, isYou }) {
  const countyCode =
    message.country && message.country !== "undefined"
      ? message.country.toLowerCase()
      : "";
  return (
    <Box display="grid" justifyItems={isYou ? "end" : "start"}>
      <Grid
        templateRows="30px 1fr 25px"
        templateColumns="1fr"
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
          color="gray.500"
          mb="2"
        >
          {isYou ? "You" : message.username}{" "}
          {countyCode && (
            <Box display="inline-block" fontSize="10px">
              from {message.country}{" "}
              <img
                style={{ display: "inline-block", marginTop: "-4px" }}
                src={`/flags/${countyCode}.png`}
                alt={message.country}
              />
            </Box>
          )}
        </GridItem>
        <GridItem
          justifySelf="start"
          textAlign="left"
          wordBreak="break-word"
          fontSize="md"
          fontFamily="Montserrat, sans-serif"
        >
          {message.text}
        </GridItem>
        <GridItem fontSize="11px" justifySelf="end" alignSelf="end">
          {dayjs(message.timestamp).fromNow()}
        </GridItem>
      </Grid>
    </Box>
  );
}
