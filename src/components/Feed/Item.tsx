import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import config from "Configs/config.json";
import { Actions } from "./Actions";
import { Author } from "./Author";
import { Info } from "./Info";

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

  return (
    <Stack background="gray.700" borderRadius="lg" pb="8" mb="5">
      <Flex w="100%" m="0 auto">
        <Stack width="100%" borderRadius="lg">
          <Image src={imagemUrl} width="100%" borderRadius="lg" alt={title} />

          <Box px="6">
            <Info title={title} description={description} />

            <Flex mt="6" justifyContent="space-between">
              <Author {...author} />
              <Actions likes={likes} />
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
