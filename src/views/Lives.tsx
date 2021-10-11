import axios from "axios";
import { useState, useEffect } from "react";
import { LIVES_LIST } from "Services/gatewayRoutes";
import { Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { LiveItem } from "Components/ListItem";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";

interface LivesProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export default function Lives() {
  const [lives, setLives] = useState<LivesProps[]>([]);

  useEffect(() => {
    axios.get(LIVES_LIST).then((response) => {
      setLives(response.data);
    });
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />

        <Stack>
          <Box pb="10">
            <Text fontSize="xl">Lista de</Text>
            <Heading>Lives</Heading>
          </Box>

          <Box width="100%" maxWidth={1000} mx="auto">
            {lives.map((live) => (
              <LiveItem key={live.id} {...live} />
            ))}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
