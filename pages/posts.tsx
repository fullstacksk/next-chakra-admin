import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";
import PostList from "../posts/PostList";

const posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users | Next-Chakra-Admin</title>
      </Head>
      <Layout headerText="Posts">
        <PostList />
      </Layout>
    </>
  );
};

export default WithAuth(posts);
