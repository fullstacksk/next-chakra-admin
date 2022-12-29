import { Text } from "@chakra-ui/react";
import React from "react";

interface ICustomGroupMenu {
  children: React.ReactNode;
  title: string;
}
const CustomMenuGroup = ({ children, title }: ICustomGroupMenu) => {
  return (
    <>
      <Text as="span" p={1} textTransform="uppercase">
        {title}
      </Text>
      {children}
    </>
  );
};

export default CustomMenuGroup;
