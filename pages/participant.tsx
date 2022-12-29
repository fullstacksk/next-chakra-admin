import Head from "next/head";
import React from "react";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";

const Participant = () => {
  return (
    <>
      <Head>
        <title>Participants | Admin</title>
      </Head>
      <main>
        <Layout headerText="Participants">
          <h1>participant...</h1>
        </Layout>
      </main>
    </>
  );
};

export default WithAuth(Participant);
