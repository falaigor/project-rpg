import { Flex, Stack, Box } from "@chakra-ui/react";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { Feed } from "Components/Feed";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />

        <Stack>
          <Box width="100%" maxWidth={800} mx="auto">
            <Feed />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
