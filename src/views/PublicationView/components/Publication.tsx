import axios from "axios";
import config from "Configs/config.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PUBLICATIONS_FETCH_PUBLICATION_URL } from "Services/gatewayRoutes";
import {
  Box,
  Flex,
  Image,
  Stack,
  CircularProgress,
  useColorMode,
} from "@chakra-ui/react";

import { Info } from "./Info";
import { Actions } from "./Actions";

import styled from "styled-components";

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
    image: {
      url: string;
    };
  };
}

interface PublicationParams {
  id: string;
}

export const Publication = () => {
  const [publication, setPublication] = useState<PublicationProps>();
  const params = useParams<PublicationParams>();
  const { colorMode } = useColorMode();

  useEffect(() => {
    async function getPublication() {
      try {
        let response = await axios.get(
          PUBLICATIONS_FETCH_PUBLICATION_URL(params.id)
        );
        setPublication(response.data[0]);
      } catch (e) {
        console.error(e);
      }
    }
    getPublication();
  }, [params.id]);

  if (!publication) {
    return (
      <Flex w="100%" m="0 auto">
        <CircularProgress isIndeterminate thickness="5px" color="purple.500" />
      </Flex>
    );
  }

  const imagemUrl = config.gatewayUrl + publication.image.url;

  return (
    <Stack
      border="1px solid"
      borderColor={colorMode === "light" ? "gray.20" : "gray.600"}
      borderRadius="lg"
      pb="8"
      mb="5"
    >
      <Flex w="100%" m="0 auto">
        <Stack width="100%" borderRadius="lg">
          <FlexImage>
            <Image
              src={imagemUrl}
              width="100%"
              borderRadius="0.5rem 0.5rem 0 0"
              alt={publication.title}
            />
          </FlexImage>
          <Box px="6">
            <Info {...publication} />
            <Actions {...publication} />
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

const FlexImage = styled(Flex)`
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;
