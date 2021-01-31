import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
} from "@chakra-ui/react";
import AuthContainer from "./AuthContainer";
import { Link, useHistory } from "react-router-dom";
import supabase from "../useSupabase";

export default function SignupEmailForm({ user }) {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const password_confirm = e.target[2].value;
    console.log({ email, password, password_confirm });
    if (!email || !password || !password_confirm) {
      setSignupError("Please fill in all fields");
      return;
    }
    if (password !== password_confirm) {
      setSignupError("Passwords does not match");
      return;
    }
    console.log("calling signup");
    setIsLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setIsLoading(false);
    if (error) {
      console.log("error :>> ", error);
      setSignupError(error.message);
    } else {
      console.log("user :>> ", user);
      setSignupSuccess(email);
    }
    // history.replace({ pathname: "/login" });
  };
  useEffect(() => {
    user?.email && history.replace({ pathname: "/" });
  }, []);

  if (signupSuccess)
    return (
      <AuthContainer>
        <Alert status="success">
          <p>
            Thank you for signing up!
            <br />
            <br />
            We have sent you an email to <b>{signupSuccess}</b>, please confirm
            your signup.
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
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password-confirm" isRequired>
            <FormLabel>Confirm password</FormLabel>
            <Input type="password" />
          </FormControl>
          {signupError && (
            <Alert m="0" status="error" mt="20px">
              {signupError}
            </Alert>
          )}
          <Button colorScheme="teal" type="submit" isLoading={isLoading}>
            Signup
          </Button>
        </Grid>
      </form>
      Have an account? <Link to="/login">Login</Link>
    </AuthContainer>
  );
}
