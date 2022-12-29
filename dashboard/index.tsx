import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={4}>
        {/* Card #one */}
        <Card mt={3}>
          <CardHeader>
            <Heading size="md">card #One</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia dolor consequatur ex expedita. Consequuntur excepturi
              veniam, pariatur enim, maiores qui soluta quibusdam illo voluptate
              consectetur commodi adipisci iste, odio doloribus aliquam
              doloremque asperiores molestiae quisquam mollitia necessitatibus
              nemo dolores! Error quam beatae esse nobis reprehenderit corrupti
              alias facere perferendis.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default Dashboard;
