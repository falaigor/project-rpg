import { Stack, Flex } from "@chakra-ui/react";

import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { FeedLives } from "Components/FeedLives";

export default function LivesView() {
  return (
    <Flex px="10" direction="column" h="100vh">
      <Header />

      <Stack width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />
        <FeedLives />
      </Stack>
    </Flex>
  );
}
