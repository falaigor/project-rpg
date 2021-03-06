import axios from "axios";
import { useEffect, useState } from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { PUBLICATIONS_LIST } from "Services/gatewayRoutes";
import { Item } from "./Item";

interface PublicationProps {
  id: number;
  title: string;
  description: string;
  likes: number;
  slug: string;
  published_at: string;
  image: {
    url: string;
  };
  author: {
    name: string;
    username: string;
    image: {
      url: string;
    };
  };
}

export function Feed() {
  const [isLogged, setIsLogged] = useState(false);
  const [publications, setPublications] = useState<PublicationProps[]>([]);

  useEffect(() => {
    axios.get(PUBLICATIONS_LIST).then((response) => {
      setPublications(response.data);
      setIsLogged(true);
    });
  }, []);

  return (
    <SimpleGrid minChildWidth="220px" spacing="1rem">
      {publications.map((publication) => (
        <>
          <Skeleton isLoaded={isLogged}>
            <Item key={publication.id} {...publication} />
          </Skeleton>
        </>
      ))}
    </SimpleGrid>
  );
}
