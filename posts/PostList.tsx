import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
} from "@chakra-ui/react";

interface IPost {
  id: number;
  title: string;
  userId: number;
}

const PostList: React.FC = () => {
  const [posts, setUsers] = useState<IPost[]>([]);

  useEffect(() => {
    const getPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    };
    return getPosts;
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Note: resources have relations. For example: posts have many comments,
          albums have many photos, ... see
          <Link color="blue" href="https://jsonplaceholder.typicode.com/guide">
            {" "}
            guide{" "}
          </Link>
          for the full list.
        </TableCaption>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>title</Th>
            <Th isNumeric>post ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts?.map((post) => (
            <Tr key="post.username">
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td isNumeric>{post.userId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PostList;
