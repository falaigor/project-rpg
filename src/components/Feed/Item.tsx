import { Box, Flex, Image, Stack, useColorMode } from "@chakra-ui/react";
import config from "Configs/config.json";
import { Actions } from "./Actions";
import { Author } from "./Author";
import { Info } from "./Info";
import styled from "styled-components";

interface ItemProps {
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

export function Item({
  title,
  description,
  likes,
  slug,
  published_at,
  image,
  author,
}: ItemProps) {
  const imagemUrl = config.gatewayUrl + image.url;
  const except = description.substring(0, 250) + "...";
  const { colorMode } = useColorMode();

  return (
    <Stack
      background={colorMode === "light" ? "gray.10" : "gray.700"}
      borderRadius="lg"
      pb="8"
      mb="5"
    >
      <Flex w="100%" m="0 auto">
        <Stack width="100%" borderRadius="lg">
          <FlexImage>
            <Image src={imagemUrl} width="100%" borderRadius="lg" alt={title} />
          </FlexImage>

          <Box px="6">
            <Info title={title} description={except} slug={slug} />

            <Flex mt="6" justifyContent="space-between">
              <Author data={published_at} {...author} />
              <Actions likes={likes} />
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}

const FlexImage = styled(Flex)`
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;
