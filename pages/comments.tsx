import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";
import CommentList from "../comments/CommentList";

const Comments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comments | Next-Chakra-Admin</title>
      </Head>
      <Layout headerText="Comments">
        <CommentList />
      </Layout>
    </>
  );
};

export default WithAuth(Comments);
