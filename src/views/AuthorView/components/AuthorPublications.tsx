import { Box, Flex, Image, Stack, Link, useColorMode } from "@chakra-ui/react";
import { AppRoute } from "Routes/routes";
import { getImageUrl } from "Utils/urlImage";

import styled from "styled-components";
import { Actions } from "Components/Feed/Actions";

interface AuthorPublicationProps {
  author?: number;
  title: string;
  description: string;
  likes: number;
  slug: string;
  published_at: string;
  image: {
    url: string;
  };
}

export const AuthorPublications = ({
  title,
  description,
  likes,
  slug,
  published_at,
  image,
}: AuthorPublicationProps) => {
  const { colorMode } = useColorMode();
  const except = description.substring(0, 250) + "...";

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
            <Image
              src={getImageUrl(image.url)}
              width="100%"
              borderRadius="lg"
              alt={title}
            />
          </FlexImage>

          <Box px="6">
            <Link to={`${AppRoute.Publication}/${slug}`}>
              <Box
                mt="3"
                fontWeight="semibold"
                fontSize="1.6rem"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {title}
              </Box>

              <Box
                mt="3"
                fontWeight="normal"
                fontSize="0.9rem"
                lineHeight="tight"
              >
                <p>{except}</p>
              </Box>
            </Link>

            <Flex mt="6" justifyContent="flex-end">
              <Actions likes={likes} />
            </Flex>
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
