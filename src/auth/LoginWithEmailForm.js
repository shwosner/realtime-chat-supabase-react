import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import { useAppContext } from "../context/appContext";

export default function LoginWithEmail({ user }) {
  const { auth } = useAppContext();
  const history = useHistory();
  const { hash } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[0].value;
    console.log({ email, password });
    setIsLoading(true);
    const { user, error } = await auth.signIn({
      email,
      password,
    });
    setIsLoading(false);
    if (error) {
      console.log("error :>> ", error);
      setLoginError(error.message);
    } else {
      console.log("user :>> ", user);
      // setSignupSuccess(email);
    }
  };

  useEffect(() => {
    console.log("hash :>> ", hash);
    user?.email && history.replace({ pathname: "/" });
  }, []);

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid gap="8">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" required />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" required />
          </FormControl>

          {loginError && (
            <Alert status="error" mt="20px">
              {loginError}
            </Alert>
          )}
          <Button colorScheme="teal" type="submit" isLoading={isLoading}>
            Login
          </Button>
        </Grid>
      </form>
      Don't have an account? <Link to="/signup">Sign up</Link> <br />
      <Link to="/reset-password">Forgot password</Link>
    </AuthContainer>
  );
}
