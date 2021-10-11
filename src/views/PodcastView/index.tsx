import axios from "axios";
import { useState, useEffect } from "react";
import { PODCASTS_LIST } from "Services/gatewayRoutes";
import { Box, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { PodcastItem } from "./components/Item";
import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";

interface PodcastProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export default function PodcastView() {
  const [podcasts, setPodcasts] = useState<PodcastProps[]>([]);

  useEffect(() => {
    axios.get(PODCASTS_LIST).then((response) => {
      setPodcasts(response.data);
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
            <Heading>Podcasts</Heading>
          </Box>

          <Box width="100%" maxWidth={1000} mx="auto">
            {podcasts.map((podcast) => (
              <PodcastItem key={podcast.id} {...podcast} />
            ))}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
