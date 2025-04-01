import { Button, Grid, GridItem, Image, Box, Text, IconButton, Input, Stack } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { BiSave, BiEdit } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import supabase from "../supabaseClient";
import { useAppContext } from "../context/appContext";

function NameForm() {
  const { username, setUsername } = useAppContext();
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    setNewUsername(username);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);

    if (!newUsername) {
      setNewUsername(username);
      return;
    }

    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" alignItems="center">
        {isEditing ? (
          <Input
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setNewUsername(e.target.value)}
            value={newUsername}
            bg="gray.100"
            size="sm"
            borderRadius="md"
            borderColor="gray.300"
            focusBorderColor="teal.500"
            ref={inputRef}
            maxLength="15"
            onBlur={handleSubmit}
          />
        ) : (
          <Text
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            cursor="pointer"
            _hover={{ color: "teal.500" }}
            onClick={() => setIsEditing(true)}
          >
            Welcome, <strong>{newUsername}</strong>
          </Text>
        )}
        <IconButton
          size="sm"
          colorScheme="teal"
          variant="outline"
          aria-label={isEditing ? "Save" : "Edit"}
          icon={isEditing ? <BiSave /> : <BiEdit />}
          onClick={(e) => {
            if (isEditing) {
              handleSubmit(e);
            } else setIsEditing(true);
          }}
        />
      </Stack>
    </form>
  );
}

export default function Header() {
  const { username, setUsername, randomUsername, session } = useAppContext();

  return (
    <Box
      as="header"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      boxShadow="lg"
      py={4}
      px={8}
      borderBottom="4px solid #e2e8f0"
    >
      <Grid
        templateColumns="max-content 1fr auto"
        alignItems="center"
        gap={6}
      >
        <GridItem>
          <Image src="/logo.png" height="50px" alt="Logo" />
        </GridItem>
        
        {session ? (
          <>
            <GridItem justifySelf="center">
              <Text fontSize="xl" fontWeight="bold" color="gray.700">
                Welcome, {username}!
              </Text>
            </GridItem>
            <GridItem>
              <IconButton
                size="md"
                colorScheme="red"
                variant="solid"
                aria-label="Logout"
                icon={<FaSignOutAlt />}
                onClick={() => {
                  const { error } = supabase.auth.signOut();
                  if (error) return console.error("error signOut", error);
                  const username = randomUsername();
                  setUsername(username);
                  localStorage.setItem("username", username);
                }}
              />
            </GridItem>
          </>
        ) : (
          <GridItem>
            <NameForm username={username} setUsername={setUsername} />
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}
