import { Flex, Stack, Box } from "@chakra-ui/react";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";

export default function AuthorView() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />

        <Stack>
          <Box width="100%" maxWidth={1000} mx="auto"></Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
