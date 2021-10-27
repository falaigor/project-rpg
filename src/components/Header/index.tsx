import { Link } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import { NotificationNav } from "./NotificationNav";

export function Header() {
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
        </Flex>
      </Flex>
    </Flex>
  );
}
