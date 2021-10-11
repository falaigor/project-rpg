import { Box, Flex, Image, Stack, Link, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";

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

export const AuthorPublications = ({ publications }: AuthorProps) => {
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
            {/* <Image src={imagemUrl} width="100%" borderRadius="lg" alt={title} /> */}
          </FlexImage>

          <Box px="6">
            <Link to={`/`}>
              <Box
                mt="3"
                fontWeight="semibold"
                fontSize="1.6rem"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                title
              </Box>

              <Box
                mt="3"
                fontWeight="normal"
                fontSize="0.9rem"
                lineHeight="tight"
              >
                {/* <p>{description}</p> */}
              </Box>
            </Link>

            <Flex mt="6" justifyContent="space-between">
              {/* <Author data={published_at} {...author} />
              <Actions likes={likes} /> */}
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
