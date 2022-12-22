import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [emailError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email.length === 0) {
      setAuthError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    // Perform login logic here
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
            Password Reset
          </Heading>
        </Center>
        {emailError ? (
          <Alert status="error" variant="subtle" borderRadius="md" mt={3}>
            <AlertIcon />
            {emailError}
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
            <FormHelperText>
              We'll send you a link through which you will be able to reset your
              password.
            </FormHelperText>
          </FormControl>

          {/* Submit Button */}
          <Button
            variant="solid"
            type="submit"
            w="full"
            mt={3}
            colorScheme="teal"
            isLoading={isLoading}
          >
            Send
          </Button>

          {/* Back to login */}
          <Text
            textAlign="center"
            color="primary.600"
            fontWeight="semibold"
            mt={3}
            textColor="red.400"
          >
            <ChakraLink href="/login">Back to login</ChakraLink>
          </Text>
        </form>
      </Stack>
    </Flex>
  );
};

export default ForgotPass;
