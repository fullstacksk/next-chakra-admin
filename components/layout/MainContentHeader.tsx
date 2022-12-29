import { Card, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

interface IMainHeader {
  headerText: string;
}
const MainContentHeader = ({ headerText }: IMainHeader) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{headerText}</Heading>
      </CardHeader>
    </Card>
  );
};

export default MainContentHeader;
