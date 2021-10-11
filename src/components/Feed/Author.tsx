import { Avatar, Flex, Text } from "@chakra-ui/react";
import config from "Configs/config.json";

interface AuthorProps {
  name: string;
  image: {
    url: string;
  };
}

export const Author = ({ name, image }: AuthorProps) => {
  const imagemUrl = config.gatewayUrl + image.url;

  return (
    <Flex alignItems="center">
      <Avatar size="sm" name={name} src={imagemUrl} mr="10px" />
      <Text mr="10px">{name}</Text>
      <Text fontSize="0.8rem" color="gray.300">
        2 dias atrás
      </Text>
    </Flex>
  );
};
