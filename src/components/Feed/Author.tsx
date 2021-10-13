import { Avatar, Flex, Link, Text } from "@chakra-ui/react";

import { getImageUrl } from "Utils/urlImage";
import { postDate } from "Utils/postDate";

import styled from "styled-components";

interface AuthorProps {
  data: string;
  name: string;
  image: {
    url: string;
  };
}

export const Author = ({ name, image, data }: AuthorProps) => {
  return (
    <Flex alignItems="center">
      <NewLink>
        <Avatar size="sm" name={name} src={getImageUrl(image.url)} mr="10px" />
        <Text mr="10px">{name}</Text>
      </NewLink>
      <Text fontSize="0.8rem" color="gray.300">
        {postDate(data)}
      </Text>
    </Flex>
  );
};

const NewLink = styled(Link)`
  display: flex;
  align-items: center;
`;
