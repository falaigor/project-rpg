import { Flex, Heading } from "@chakra-ui/react";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";

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
        <Flex>
          <Heading>RPG</Heading>
          <Heading color="purple.500">.</Heading>
          <Heading>News</Heading>
        </Flex>

        <Flex align="center" ml="auto">
          <NotificationNav />
          <Profile />
        </Flex>
      </Flex>
    </Flex>
  );
}
