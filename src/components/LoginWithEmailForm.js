import React, { useState } from "react";
import { Button, FormControl, FormLabel, Grid, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthContainer from "./AuthContainer";

export default function LoginWithEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[0].value;
    console.log({ email, password });
  };

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid gap="8">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button colorScheme="teal" type="submit" isLoading={isLoading}>
            Login
          </Button>
        </Grid>
      </form>
      Don't have an account? <Link to="/signup">Sign up</Link>
    </AuthContainer>
  );
}
