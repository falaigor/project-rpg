import { Flex, Stack } from "@chakra-ui/react";

import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { Feed } from "Components/Feed";

export default function Home() {
  return (
    <Flex px="10" direction="column" h="100vh">
      <Header />

      <Stack width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />
        <Feed />
      </Stack>
    </Flex>
  );
}
