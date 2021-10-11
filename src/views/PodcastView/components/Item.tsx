import { Box, Flex, Image, Stack, useColorMode } from "@chakra-ui/react";
import config from "Configs/config.json";

interface PodcastItemProps {
  title?: string;
  description?: string;
  image: {
    url: string;
  };
}

export const PodcastItem = ({
  title,
  description,
  image,
}: PodcastItemProps) => {
  const imagemurl = config.gatewayUrl + image.url;
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
              src={imagemurl}
              width={200}
              borderRadius="lg"
              alt={description}
            />
          </Stack>
        </Flex>

        <Flex>
          <Stack>
            <Box px="6">
              <Box
                mt="3"
                fontWeight="semibold"
                fontSize="2rem"
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
                <p>{description}</p>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};
