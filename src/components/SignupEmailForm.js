import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import AuthContainer from "./AuthContainer";
import { Link } from "react-router-dom";

export default function SignupEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[0].value;
    const password_confirm = e.target[0].value;
    console.log({ email, password, password_confirm });
  };

  return (
    <AuthContainer>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        // style={{ width: "400px", background: "white", padding: 20 }}
      >
        <Grid gap="8">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password-confirm">
            <FormLabel>Confirm password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button colorScheme="teal" type="submit" isLoading={isLoading}>
            Signup
          </Button>
        </Grid>
      </form>
      Have an account? <Link to="/login">Login</Link>
    </AuthContainer>
  );
}
