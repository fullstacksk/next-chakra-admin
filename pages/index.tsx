import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { WithAuth } from "../components/hoc/WithAuth";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout headerText="Dashboard">
          <SimpleGrid columns={2} spacing={4}>
            {/* Card #one */}
            <Card mt={3}>
              <CardHeader>
                <Heading size="md">card #One</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
              </CardBody>
            </Card>
            {/* card #two  */}
            <Card mt={3}>
              <CardHeader>
                <Heading size="md">card #Two</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <Card mt={3}>
              <CardHeader>
                <Heading size="md">card #Three</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <Card mt={3}>
              <CardHeader>
                <Heading size="md">card #Three</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident officia dolor consequatur ex expedita. Consequuntur
                  excepturi veniam, pariatur enim, maiores qui soluta quibusdam
                  illo voluptate consectetur commodi adipisci iste, odio
                  doloribus aliquam doloremque asperiores molestiae quisquam
                  mollitia necessitatibus nemo dolores! Error quam beatae esse
                  nobis reprehenderit corrupti alias facere perferendis.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Layout>
      </main>
    </>
  );
};

export default WithAuth(Home);
// export default Home;
