import { useState } from "react";

import { Link } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";

import { storageAvaliable } from "Utils/storage";

export function Header() {
  const jsonStorage =
    storageAvaliable("localStorage") && localStorage.getItem("user_info");
  const data = JSON.parse(jsonStorage || "{}");

  const [isLogged, setIsLogged] = useState(!!data.jwt);

  const logout = () => {
    storageAvaliable("localStorage") && localStorage.removeItem("user_info");
    setIsLogged(false);
  };

  const onClick = () => {
    window.location.href = `${process.env.REACT_APP_STRAPI_API_URL}/connect/auth0`;
  };

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
          {isLogged ? (
            <Profile
              logout={logout}
              username={data.user.username}
              email={data.user.email}
            />
          ) : (
            <Button onClick={onClick}>Login</Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
