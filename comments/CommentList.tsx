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

interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
const CommentList: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const getPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .then((data) => setComments(data));
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
            <Th>name</Th>
            <Th>email</Th>
            <Th isNumeric>Post ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {comments.map((comment) => (
            <Tr key="comment.username">
              <Td>{comment.id}</Td>
              <Td>{comment.name}</Td>
              <Td>{comment.email}</Td>
              <Td isNumeric>{comment.postId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CommentList;
