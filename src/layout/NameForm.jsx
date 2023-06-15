import { useEffect, useRef, useState } from "react";
import { Input, Stack, IconButton } from "@chakra-ui/react";
import { BiSave, BiEdit } from "react-icons/bi";
import { useAppContext } from "../context/appContext";

export default function NameForm() {
  const { username, setUsername } = useAppContext();
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

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
    toggleEditing();

    if (!newUsername) {
      setNewUsername(username);
      return;
    }
    // setUsername(newUsername);
    // setIsEditing(false);

    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginRight: "20px" }}>
      <Stack direction="row">
        {isEditing ? (
          <Input
            name="username"
            placeholder="Choose a username"
            onChange={(e) => setNewUsername(e.target.value)}
            value={newUsername}
            bg="gray.100"
            size="sm"
            border="none"
            onBlur={handleSubmit}
            ref={inputRef}
            maxLength="15"
          />
        ) : (
          <span onClick={toggleEditing} style={{ cursor: "pointer" }}>
            Welcome <strong>{newUsername}</strong>
          </span>
        )}
        <IconButton
          size="sm"
          paddingBottom="12px"
          variant="outline"
          colorScheme="teal"
          aria-label="Save"
          fontSize="15px"
          icon={isEditing ? <BiSave /> : <BiEdit />}
          border="none"
          onClick={(e) => {
            if (isEditing) {
              handleSubmit(e);
            } else toggleEditing();
          }}
        />
      </Stack>
    </form>
  );
}
