import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isEmailAuthLoading, setIsEmailAuthLoading] = useState(false);
  const { login } = useAuthContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setAuthError("Please enter a valid email and password");
      return;
    }

    setIsEmailAuthLoading(true);
    // Perform login logic here
    if (email === "fullstacksk@gmail.com" && password === "fullstacksk") {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGxzdGFja3NrQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGFpbGVuZHJhIEt1bWFyIiwiaWF0IjoxNTE2MjM5MDIyfQ.fNjo6N5wpTcvUHhI9S47gvzy_eSdNRVMqJxdAmUnRAI";
      // console.log(accessToken);
      login(accessToken);
      setIsEmailAuthLoading(false);
    } else {
      setIsEmailAuthLoading(false);
      setAuthError("Please enter a valid email and password");
    }
  };
  return (
    <Flex
      width="100wh"
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Stack w="30%">
        <Center mb={3}>
          <Image src="/next.svg" alt="NextJs" width={150} height={70} />
        </Center>
        <Center mb={3}>
          <Heading as="h1" size="md" textColor="teal">
            Login to Next-Chakra-Admin
          </Heading>
        </Center>
        {authError ? (
          <Alert status="error" variant="subtle" borderRadius="md" mt={3}>
            <AlertIcon />
            {authError}
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit}>
          {/* Email Form */}
          <FormControl p="1" mt={3}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl p="1" mt="3">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={"Enter your password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </FormControl>

          {/* Forgot password */}
          <Text
            textAlign="right"
            color="primary.600"
            fontWeight="semibold"
            mt={3}
            textColor="red.400"
          >
            <ChakraLink href="/forgot-password">
              Forgot your password?
            </ChakraLink>
          </Text>

          {/* Submit Button */}
          <Button
            variant="solid"
            type="submit"
            w="full"
            mt={3}
            colorScheme="teal"
            isLoading={isEmailAuthLoading}
          >
            Login
          </Button>
        </form>
      </Stack>
    </Flex>
  );
};

export default Login;
