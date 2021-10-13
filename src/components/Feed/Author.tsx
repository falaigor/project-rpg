import { Avatar, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { getImageUrl } from "Utils/urlImage";
import { getPostDate } from "Utils/postDate";

import styled from "styled-components";

interface AuthorProps {
  data: string;
  name: string;
  username: string;
  image: {
    url: string;
  };
}

export const Author = ({ name, username, image, data }: AuthorProps) => {
  return (
    <Flex alignItems="center">
      <Link to={`/${username}`}>
        <NewLink>
          <Avatar
            size="sm"
            name={name}
            src={getImageUrl(image.url)}
            mr="10px"
          />
          <Text mr="10px">{name}</Text>
        </NewLink>
      </Link>
      <Text fontSize="0.8rem" color="gray.300">
        {getPostDate(data)}
      </Text>
    </Flex>
  );
};

const NewLink = styled(ChakraLink)`
  display: flex;
  align-items: center;
`;
