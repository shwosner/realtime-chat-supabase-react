import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../useSupabase";
import AuthContainer from "./AuthContainer";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [requestSuccess, setRequestSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    setIsLoading(true);
    const { data, error } = auth.api.resetPasswordForEmail(email);
    setIsLoading(false);
    if (error) {
      console.log("error :>> ", error);
      setResetError(error.message);
    } else {
      console.log("data :>> ", data);
      setRequestSuccess(email);
    }
  };

  if (requestSuccess)
    return (
      <AuthContainer>
        <Alert status="success">
          <p>
            We have sent an email to <b>{requestSuccess}</b> with a reset link.
            <br />
            <Button onClick={() => setRequestSuccess("")} variant="link">
              Incorrect email
            </Button>
          </p>
        </Alert>
      </AuthContainer>
    );

  return (
    <AuthContainer>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        // style={{ width: "400px", background: "white", padding: 20 }}
      >
        <Grid gap="6">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          {resetError && (
            <Alert m="0" status="error" mt="20px">
              {resetError}
            </Alert>
          )}
          <Button colorScheme="teal" type="submit" isLoading={isLoading}>
            Reset password
          </Button>
        </Grid>
      </form>
      <Link
        style={{ textAlign: "center", display: "block", marginTop: 5 }}
        to="/login"
      >
        Login
      </Link>
    </AuthContainer>
  );
}
