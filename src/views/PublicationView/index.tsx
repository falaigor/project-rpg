import { Flex, Stack, Box } from "@chakra-ui/react";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { Publication as PublicationItem } from "./components/Publication";

export default function Publication() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />

        <Stack>
          <Box width="100%" maxWidth={1000} mx="auto">
            <PublicationItem />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
