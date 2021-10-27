import { Box, Flex, Image, Stack, useColorMode } from "@chakra-ui/react";
import { getImageUrl } from "Utils/urlImage";
import { AppRoute } from "Routes/routes";
import { Link } from "react-router-dom";

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
    username: string;
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
            <Link to={`${AppRoute.Publication}/${slug}`}>
              <Image
                src={getImageUrl(image.url)}
                width="100%"
                borderTopRadius="lg"
                alt={title}
              />
            </Link>
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
  a,
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;
