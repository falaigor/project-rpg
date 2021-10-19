import { useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";

export function Header() {
  const [isLogged] = useState(!!localStorage.getItem("jwt"));

  const LoginButton = () => (
    <a
      href={`${process.env.REACT_APP_STRAPI_API_URL}/connect/auth0`}
      target="_blank"
      rel="noreferrer"
    >
      Login
    </a>
  );

  return (
    <Flex width="100%" borderBottom="1px solid" borderColor="gray.600" mb={10}>
      <Flex
        m="0 auto"
        width="100%"
        height="80px"
        maxWidth={1280}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Flex>
            <Heading>RPG</Heading>
            <Heading color="purple.500">.</Heading>
            <Heading>News</Heading>
          </Flex>
        </Link>

        <Flex align="center" ml="auto">
          <NotificationNav />
          {isLogged ? <Profile /> : <LoginButton />}
        </Flex>
      </Flex>
    </Flex>
  );
}
