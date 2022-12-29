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

interface IAddress {
  city: string;
}
interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number;
  address: IAddress;
  username: string;
}
const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    };
    return getUsers;
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
            <Th>Name</Th>
            <Th>Email</Th>
            <Th isNumeric>Phone</Th>
            <Th>City</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => (
            <Tr key="user.username">
              <Td>{user.name}</Td>
              <Td>{user.email} (mm)</Td>
              <Td isNumeric>{user.phone}</Td>
              <Td>{user.address.city}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
