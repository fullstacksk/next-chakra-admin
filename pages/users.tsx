import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";
import UserList from "../users/UserList";

const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users | Next-Chakra-Admin</title>
      </Head>
      <Layout headerText="Users">
        <UserList />
      </Layout>
    </>
  );
};

export default WithAuth(Users);
