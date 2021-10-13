import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AUTHOR_FETCH_URL } from "Services/gatewayRoutes";

import { Flex, Stack, Box, CircularProgress } from "@chakra-ui/react";

import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { AuthorDetail } from "./components/AuthorDetail";
import { AuthorPublications } from "./components/AuthorPublications";

interface AuthorParams {
  id: string;
}
interface AuthorPublicationProps {
  id: number;
  title: string;
  description: string;
  likes: number;
  slug: string;
  published_at: string;
  image: {
    url: string;
  };
}

interface AuthorProps {
  id: number;
  name: string;
  username: string;
  about: string;
  image: {
    url: string;
  };
  cover: {
    url: string;
  };
  website: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  publications: AuthorPublicationProps[];
}

export default function AuthorView() {
  const [author, setAuthor] = useState<AuthorProps>();
  const params = useParams<AuthorParams>();

  useEffect(() => {
    async function getAuthor() {
      try {
        let response = await axios.get(AUTHOR_FETCH_URL(params.id));
        setAuthor(response.data[0]);
      } catch (e) {
        console.error(e);
      }
    }
    getAuthor();
  }, [params.id]);

  if (!author) {
    return (
      <Flex w="100%" m="0 auto">
        <CircularProgress isIndeterminate thickness="5px" color="purple.500" />
      </Flex>
    );
  }

  console.log(author.publications);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />

        <Stack>
          <Box width="100%" maxWidth={1000} mx="auto">
            <AuthorDetail {...author} />

            {author.publications.map((publication) => (
              <Flex>
                <AuthorPublications key={publication.id} {...publication} />
              </Flex>
            ))}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
