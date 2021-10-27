import axios from "axios";
import { useState, useEffect } from "react";
import { LIVES_LIST } from "Services/gatewayRoutes";

import { SimpleGrid } from "@chakra-ui/react";
import { LiveItem } from "./Item";

interface LivesProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export const FeedLives = () => {
  const [lives, setLives] = useState<LivesProps[]>([]);

  useEffect(() => {
    axios.get(LIVES_LIST).then((response) => {
      setLives(response.data);
    });
  }, []);

  return (
    <SimpleGrid minChildWidth="220px" spacing="1rem">
      {lives.map((live) => (
        <LiveItem key={live.id} {...live} />
      ))}
    </SimpleGrid>
  );
};
