import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getImageUrl } from "Utils/urlImage";

import { AUTHOR_FETCH_URL } from "Services/gatewayRoutes";
import {
  Box,
  Flex,
  Stack,
  Image,
  Divider,
  Text,
  Avatar,
  Link,
  CircularProgress,
  useColorMode,
} from "@chakra-ui/react";

import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeLine,
  RiGlobalLine,
} from "react-icons/ri";

import styled from "styled-components";

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
}

interface AuthorParams {
  id: string;
}

export const AuthorDetail = () => {
  const [author, setAuthor] = useState<AuthorProps>();
  const params = useParams<AuthorParams>();
  const { colorMode } = useColorMode();

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
              src={getImageUrl(author.cover.url)}
              width="100%"
              borderRadius="0.5rem 0.5rem 0 0"
              alt={author.name}
            />
          </FlexImage>
          <Box px="6">
            <Flex alignItems="flex-end" mt="-40px" mb="20px">
              <Avatar
                mr="10px"
                size="xl"
                name={author.name}
                src={getImageUrl(author.image.url)}
                border="5px solid"
                color={colorMode === "light" ? "gray.10" : "gray.800"}
              />

              <Box>
                <Text fontSize="1.2rem">{author.name}</Text>
                <Text>@{author.username}</Text>
              </Box>
            </Flex>
            <Divider
              borderColor={colorMode === "light" ? "gray.20" : "gray.600"}
            />
            <Flex mt="20px">{author.about}</Flex>
            <Flex mt="20px" fontSize="1.6rem">
              <SocialLink colorMode={colorMode}>
                <RiFacebookBoxFill />
              </SocialLink>
              <SocialLink colorMode={colorMode}>
                <RiTwitterFill />
              </SocialLink>
              <SocialLink colorMode={colorMode}>
                <RiInstagramLine />
              </SocialLink>
              <SocialLink colorMode={colorMode}>
                <RiYoutubeLine />
              </SocialLink>
              <SocialLink colorMode={colorMode}>
                <RiGlobalLine />
              </SocialLink>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

const FlexImage = styled(Flex)`
  img {
    width: 100vw;
    height: 200px;
    object-fit: cover;
  }
`;

const SocialLink = styled(Link)`
  padding-right: 10px;
  color: ${(props) =>
    props.colorMode === "light"
      ? "var(--chakra-colors-gray-300)"
      : "var(--chakra-colors-gray-100)"};

  :hover {
    color: ${(props) =>
      props.colorMode === "light"
        ? "var(--chakra-colors-gray-700)"
        : "var(--chakra-colors-gray-400)"};
  }
`;
