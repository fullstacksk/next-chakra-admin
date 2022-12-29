import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import MainContentHeader from "./MainContentHeader";
interface ILayoutProps {
  children: React.ReactNode;
  headerText: string;
}
const MainContent = ({ children, headerText }: ILayoutProps) => {
  return (
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
      <Stack m={3} as="main">
        <MainContentHeader headerText={headerText} />
        {children}
      </Stack>
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainContent;
