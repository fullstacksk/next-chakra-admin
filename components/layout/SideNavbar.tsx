import { Menu, MenuDivider, Icon, Stack } from "@chakra-ui/react";
import {
  Cog8ToothIcon,
  Squares2X2Icon,
  TicketIcon,
  UsersIcon,
  ChatBubbleOvalLeftIcon,
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
      as="aside"
    >
      <Menu>
        <CustomMenuGroup title="Dashboard">
          <CustomMenuItem
            icon={<Icon as={Squares2X2Icon} boxSize="5" />}
            href="/"
          >
            Dashboard
          </CustomMenuItem>
        </CustomMenuGroup>
        <CustomMenuGroup title="Main">
          <CustomMenuItem
            icon={<Icon as={UsersIcon} boxSize="5" />}
            href="/users"
          >
            Users
          </CustomMenuItem>
          <CustomMenuItem
            icon={<Icon as={TicketIcon} boxSize="5" />}
            href="/posts"
          >
            Posts
          </CustomMenuItem>
          <CustomMenuItem
            icon={<Icon as={ChatBubbleOvalLeftIcon} boxSize="5" />}
            href="/comments"
          >
            Comments
          </CustomMenuItem>
        </CustomMenuGroup>
        <MenuDivider />
        <CustomMenuItem
          icon={<Icon as={Cog8ToothIcon} boxSize="5" />}
          href="/settings"
        >
          Settings
        </CustomMenuItem>
      </Menu>
    </Stack>
  );
};

export default SideNavbar;
