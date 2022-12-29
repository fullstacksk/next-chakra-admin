import { Menu, MenuDivider, Icon, Stack } from "@chakra-ui/react";
import {
  Cog8ToothIcon,
  FolderIcon,
  Squares2X2Icon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import CustomMenuGroup from "./CustomMenuGroup";
import CustomMenuItem from "./CustomMenuItem";

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
        <CustomMenuGroup title="MenuGroup1">
          <CustomMenuItem
            icon={<Icon as={Squares2X2Icon} boxSize="5" />}
            href="/"
          >
            Dashboard
          </CustomMenuItem>
          <CustomMenuItem
            icon={<Icon as={FolderIcon} boxSize="5" />}
            href="/participant"
          >
            Participant
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 3
          </CustomMenuItem>
        </CustomMenuGroup>
        <CustomMenuGroup title="MenuGroup2">
          <CustomMenuItem icon={<Icon as={TicketIcon} boxSize="5" />} href="/">
            Menu 1
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={TicketIcon} boxSize="5" />} href="/">
            Menu 2
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={TicketIcon} boxSize="5" />} href="/">
            Menu 3
          </CustomMenuItem>
        </CustomMenuGroup>
        <CustomMenuGroup title="MenuGroup3">
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 1
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 2
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 3
          </CustomMenuItem>
        </CustomMenuGroup>
        <CustomMenuGroup title="MenuGroup4">
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 1
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 2
          </CustomMenuItem>
          <CustomMenuItem icon={<Icon as={FolderIcon} boxSize="5" />} href="/">
            Menu 3
          </CustomMenuItem>
        </CustomMenuGroup>
        <MenuDivider />
        <CustomMenuItem icon={<Icon as={Cog8ToothIcon} boxSize="5" />} href="/">
          Menu 1
        </CustomMenuItem>
      </Menu>
    </Stack>
  );
};

export default SideNavbar;
