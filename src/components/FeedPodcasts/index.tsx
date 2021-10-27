import axios from "axios";
import { PODCASTS_LIST } from "Services/gatewayRoutes";
import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { PodcastItem } from "./Item";

interface PodcastProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export const FeedPodcasts = () => {
  const [podcasts, setPodcasts] = useState<PodcastProps[]>([]);

  useEffect(() => {
    axios.get(PODCASTS_LIST).then((response) => {
      setPodcasts(response.data);
    });
  }, []);

  return (
    <SimpleGrid minChildWidth="220px" spacing="1rem">
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} {...podcast} />
      ))}
    </SimpleGrid>
  );
};
