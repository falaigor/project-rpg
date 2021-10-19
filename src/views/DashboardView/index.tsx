import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Dashboard/Sidebar";

export default function DashboardView() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" maxWidth={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Inscritos da Semana
            </Text>
          </Box>
          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Taxa de Abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
