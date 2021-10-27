import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { getImageUrl } from "Utils/urlImage";
import { FiTwitch, FiYoutube, FiGlobe } from "react-icons/fi";

import styled from "styled-components";
import { motion } from "framer-motion";

interface LiveItemProps {
  title?: string;
  description?: string;
  image: {
    url: string;
  };
  youtube?: string;
  twitch?: string;
  site?: string;
}

export const LiveItem = ({
  title,
  description,
  image,
  youtube,
  twitch,
  site,
}: LiveItemProps) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      background={colorMode === "light" ? "gray.10" : "gray.700"}
      borderRadius="lg"
      p="3"
      mb="5"
    >
      <Flex w="100%" m="0 auto">
        <Flex w="100%" maxW={200}>
          <Stack width="100%" maxW={250} borderRadius="lg">
            <Image
              src={getImageUrl(image.url)}
              width={200}
              borderRadius="lg"
              alt={description}
            />
          </Stack>
        </Flex>

        <Flex px="6" flexDirection="column" justifyContent="space-between">
          <Stack>
            <Box>
              <Box
                fontWeight="semibold"
                fontSize="2rem"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {title}
              </Box>

              <Box fontWeight="normal" fontSize="0.9rem" lineHeight="tight">
                <p>{description}</p>
              </Box>
            </Box>
          </Stack>

          <Stack>
            <Box d="flex" alignItems="baseline">
              {twitch && (
                <NewLink href={twitch} isExternal>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="lg"
                    bg={colorMode === "light" ? "gray.20" : "gray.600"}
                    p="2"
                    mr="3"
                  >
                    <FiTwitch />
                    <Text ml="2">Twitch</Text>
                  </Flex>
                </NewLink>
              )}

              {youtube && (
                <NewLink href={youtube} isExternal>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="lg"
                    bg={colorMode === "light" ? "gray.20" : "gray.600"}
                    p="2"
                    mr="3"
                  >
                    <FiYoutube />
                    <Text ml="2">Youtube</Text>
                  </Flex>
                </NewLink>
              )}

              {site && (
                <NewLink href={site} isExternal>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="lg"
                    bg={colorMode === "light" ? "gray.20" : "gray.600"}
                    p="2"
                    mr="3"
                  >
                    <FiGlobe />
                    <Text ml="2">Site</Text>
                  </Flex>
                </NewLink>
              )}
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

const NewLink = styled(motion(Link))`
  text-decoration: none !important;

  :hover {
    transform: scale(0.95) translateZ(0px);
  }
`;
