import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const SideNavbar = () => {
  return (
    <Stack
      bg="#1a202c"
      textColor="#fff"
      w="20em"
      h="90vh"
      p={2}
      sx={{
        position: "sticky",
        overflowY: "auto",
      }}
    >
      <Menu>
        <MenuOptionGroup
          title="Dashboard"
          sx={{ textTransform: "uppercase" }}
          type={""}
        >
          <MenuItemOption>Menu 1</MenuItemOption>
          <MenuItemOption>Menu 2</MenuItemOption>
          <MenuItemOption>Menu 3</MenuItemOption>
          <MenuItemOption>Menu 4</MenuItemOption>
        </MenuOptionGroup>
        <MenuOptionGroup
          title="Order"
          sx={{ textTransform: "uppercase" }}
          type="radio"
        >
          <MenuItemOption>Menu 1</MenuItemOption>
          <MenuItemOption>Menu 2</MenuItemOption>
          <MenuItemOption>Menu 3</MenuItemOption>
          <MenuItemOption>Menu 4</MenuItemOption>
        </MenuOptionGroup>
        <MenuOptionGroup
          title="Stats"
          sx={{ textTransform: "uppercase" }}
          type="radio"
        >
          <MenuItemOption>Menu 1</MenuItemOption>
          <MenuItemOption>Menu 2</MenuItemOption>
          <MenuItemOption>Menu 3</MenuItemOption>
          <MenuItemOption>Menu 4</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup
          title="Setting"
          sx={{ textTransform: "uppercase" }}
          type="radio"
        >
          <MenuItemOption>Menu 1</MenuItemOption>
          <MenuItemOption>Menu 2</MenuItemOption>
          <MenuItemOption>Menu 3</MenuItemOption>
          <MenuItemOption>Menu 4</MenuItemOption>
        </MenuOptionGroup>
      </Menu>
    </Stack>
  );
};

export default SideNavbar;
