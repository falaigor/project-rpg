import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import config from "Configs/config.json";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/pt-br";

interface AuthorProps {
  data: string;
  name: string;
  image: {
    url: string;
  };
}

export const Author = ({ name, image, data }: AuthorProps) => {
  const imagemUrl = config.gatewayUrl + image.url;
  const postDate = moment(data).locale("pt-br").fromNow();

  return (
    <Flex alignItems="center">
      <NewLink>
        <Avatar size="sm" name={name} src={imagemUrl} mr="10px" />
        <Text mr="10px">{name}</Text>
      </NewLink>
      <Text fontSize="0.8rem" color="gray.300">
        {postDate}
      </Text>
    </Flex>
  );
};

const NewLink = styled(Link)`
  display: flex;
  align-items: center;
`;
