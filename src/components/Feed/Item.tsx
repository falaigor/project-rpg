import { Box, Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { getImageUrl } from "Utils/urlImage";
import { AppRoute } from "Routes/routes";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { getPostDate } from "Utils/postDate";

interface ItemProps {
  title: string;
  slug: string;
  published_at: string;
  image: {
    url: string;
  };
}

export function Item({ title, slug, published_at, image }: ItemProps) {
  const { colorMode } = useColorMode();

  return (
    <Stack
      p="6"
      minHeight="18rem"
      border="1px solid"
      borderRadius="0.2rem"
      borderColor="gray.600"
      justifyContent="space-between"
      background={colorMode === "light" ? "gray.10" : "gray.700"}
    >
      <Box>
        <Link to={`${AppRoute.Publication}/${slug}`}>
          <Box fontWeight="semibold" fontSize="1rem" as="h2" lineHeight="tight">
            {title}
          </Box>
        </Link>
      </Box>

      <FlexImage flexDirection="column">
        <Text fontSize="0.8rem">{getPostDate(published_at)}</Text>
        <Link to={`${AppRoute.Publication}/${slug}`}>
          <Image
            src={getImageUrl(image.url)}
            width="100%"
            borderRadius="0.2rem"
            alt={title}
          />
        </Link>
      </FlexImage>
    </Stack>
  );
}

const FlexImage = styled(Flex)`
  a,
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
