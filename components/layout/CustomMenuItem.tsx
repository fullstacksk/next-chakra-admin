import { MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ICustomMenuItem {
  children: React.ReactNode;
  icon?: React.ReactElement;
  href: string;
}

const CustomMenuItem = ({
  children,
  icon,
  href,
  ...props
}: ICustomMenuItem) => {
  const router = useRouter();
  return (
    <MenuItem
      icon={icon}
      as={Link}
      href={href}
      _hover={{ bg: "gray.600", borderRadius: "md" }}
      _focus={{ textColor: "#1a202c", bg: "gray.400", borderRadius: "md" }}
      sx={
        router.pathname === href
          ? { textColor: "#1a202c", bg: "gray.400", borderRadius: "md" }
          : {}
      }
      {...props}
    >
      {children}
    </MenuItem>
  );
};

export default CustomMenuItem;
