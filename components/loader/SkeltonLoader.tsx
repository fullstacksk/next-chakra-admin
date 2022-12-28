import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Circle,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const SkeltonLoader = () => {
  return (
    <Box>
      {/* Top Navbar  */}
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
            <Skeleton w="150px" h="60px" />
          </Flex>
          <HStack>
            <Skeleton w="100px" h="20px" />
            <SkeletonCircle size="10" />
          </HStack>
        </Container>
      </Box>
      <Flex>
        {/* Side Navbar  */}
        <Stack
          bg="#1a202c"
          w="20em"
          h="90vh"
          p={2}
          sx={{
            position: "sticky",
            overflowY: "auto",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item) => {
              if (item % 3 === 0 || item === 1)
                return <Skeleton key={item} w="50%" h="4" mt="4" />;
              return <Skeleton key={item} h="10" w="80%" alignSelf="center" />;
            }
          )}
        </Stack>

        {/* Main Content  */}
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          w="full"
          h="90vh"
          sx={{
            position: "sticky",
            overflowY: "auto",
          }}
        >
          <Stack m={3}>
            {/* Content Header  */}
            <Skeleton h="50" />
            {/* Content  */}
            <SimpleGrid columns={2} spacing={4}>
              {[1, 2].map((item) => {
                return (
                  <Card key="item">
                    <CardHeader>
                      <Skeleton h="15" w="70%" />
                    </CardHeader>
                    <CardBody>
                      <SkeletonText noOfLines={4} spacing={4} />
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
            <SimpleGrid columns={1}>
              <Card mt={2}>
                <CardHeader>
                  <Skeleton h="15" w="70%" />
                </CardHeader>
                <CardBody>
                  <SkeletonText noOfLines={4} spacing={4} />
                </CardBody>
              </Card>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={4}>
              {[1, 2].map((item) => {
                return (
                  <Card key="item" mt={2}>
                    <CardHeader>
                      <Skeleton h="15" w="70%" />
                    </CardHeader>
                    <CardBody>
                      <SkeletonText noOfLines={4} spacing={4} />
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Stack>
          {/* Footer */}
          <Box
            w="full"
            h="40px"
            boxShadow="inner"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Skeleton h="4" w="200px" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SkeltonLoader;
