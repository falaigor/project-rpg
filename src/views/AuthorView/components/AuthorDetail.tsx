import { getImageUrl } from "Utils/urlImage";

import {
  Box,
  Flex,
  Stack,
  Image,
  Divider,
  Text,
  Avatar,
  Link,
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

export const AuthorDetail = ({
  name,
  username,
  about,
  image,
  cover,
  website,
  facebook,
  instagram,
  twitter,
  youtube,
}: AuthorProps) => {
  const { colorMode } = useColorMode();

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
              src={getImageUrl(cover.url)}
              width="100%"
              borderRadius="0.5rem 0.5rem 0 0"
              alt={name}
            />
          </FlexImage>
          <Box px="6">
            <Flex alignItems="flex-end" mt="-40px" mb="20px">
              <Avatar
                mr="10px"
                size="xl"
                name={name}
                src={getImageUrl(image.url)}
                border="5px solid"
                color={colorMode === "light" ? "gray.10" : "gray.800"}
              />

              <Box>
                <Text fontSize="1.2rem">{name}</Text>
                <Text>@{username}</Text>
              </Box>
            </Flex>
            <Divider
              borderColor={colorMode === "light" ? "gray.20" : "gray.600"}
            />
            <Flex mt="20px">{about}</Flex>
            <Flex mt="20px" fontSize="1.6rem">
              {facebook && (
                <SocialLink colorMode={colorMode} isExternal href={facebook}>
                  <RiFacebookBoxFill />
                </SocialLink>
              )}
              {twitter && (
                <SocialLink colorMode={colorMode} isExternal href={twitter}>
                  <RiTwitterFill />
                </SocialLink>
              )}
              {instagram && (
                <SocialLink colorMode={colorMode} isExternal href={instagram}>
                  <RiInstagramLine />
                </SocialLink>
              )}
              {youtube && (
                <SocialLink colorMode={colorMode} isExternal href={youtube}>
                  <RiYoutubeLine />
                </SocialLink>
              )}
              {website && (
                <SocialLink colorMode={colorMode} isExternal href={website}>
                  <RiGlobalLine />
                </SocialLink>
              )}
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
