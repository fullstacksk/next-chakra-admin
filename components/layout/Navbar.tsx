import {
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NextLink from "next/link";
import { useAuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { logout } = useAuthContext();
  return (
    <Box w="full" bg="white">
      <Container
        display="flex"
        maxW="full"
        h="80px"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="md"
      >
        <Flex align="center" gap="10">
          {/* Antler Logo */}
          <NextLink href="/" passHref>
            <Image src="/next.svg" alt="NextJs" width={150} height={70} />
          </NextLink>
        </Flex>
        <HStack>
          <Text fontWeight="medium" mr={2}>
            Hello Admin
          </Text>
          <Menu placement="bottom-end">
            <MenuButton
              bg="light"
              w="8"
              h="8"
              borderRadius={"full"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
              _focus={{
                outline: "2px solid transparent",
                outlineOffset: "2px",
                ring: "2",
                ringColor: "neutral.500",
              }}
            >
              <Avatar
                name="Shailendra Kumar"
                size="sm"
                src="https://bit.ly/code-beast"
                bg="neutral.200"
                // icon={<UserIcon w={"5"} h={"5"} />}
              />
            </MenuButton>
            <MenuList
              mt="1"
              w="48"
              borderRadius="md"
              bg="white"
              py="1"
              _focus={{
                outline: "2px solid transparent",
                outlineOffset: "2px",
              }}
              shadow={"lg"}
              ring={"1"}
              ringColor={"rgba(255, 255, 255, 0.05)"}
            >
              <MenuItem
                py="2"
                px="4"
                fontSize="sm"
                textColor="neutral.700"
                _hover={{ bg: "neutral.100" }}
                _focus={{ bg: "neutral.100" }}
                onClick={() => logout()}
              >
                <Icon as={ArrowRightOnRectangleIcon} w="5" h="5" mr="3" />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};
export default Navbar;
