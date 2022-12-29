import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";

const settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings | Next-Chakra-Admin</title>
      </Head>
      <Layout headerText="Settings">
        <Flex justifyContent="center" alignItems="center" h="60vh">
          <h3>comming soon...</h3>
        </Flex>
      </Layout>
    </>
  );
};

export default WithAuth(settings);
