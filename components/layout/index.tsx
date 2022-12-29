import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";

interface ILayoutProps {
  children: React.ReactNode;
  headerText: string;
}

const Layout = ({ children, headerText }: ILayoutProps) => {
  return (
    <Box>
      {/* Top Navbar */}
      <Navbar />
      <Flex>
        {/* Side Navbar */}
        <SideNavbar />
        {/* Main Contetnt */}
        <MainContent headerText={headerText}>{children}</MainContent>
      </Flex>
    </Box>
  );
};

export default Layout;
