import { Box, Flex, Avatar, Text, Link } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import { getImageUrl } from "Utils/urlImage";
import { postDate } from "Utils/postDate";

import styled from "styled-components";

interface InfoProps {
  title: string;
  description: string;
  published_at: string;
  author: {
    name: string;
    image: {
      url: string;
    };
  };
}

export const Info = ({
  title,
  description,
  published_at,
  author,
}: InfoProps) => {
  return (
    <>
      <Box
        mt="3"
        fontWeight="semibold"
        fontSize="2.6rem"
        as="h1"
        lineHeight="tight"
      >
        {title}
      </Box>

      <Box mt="4" mb="6">
        <Flex alignItems="center">
          <NewLink>
            <Avatar
              size="lg"
              name={`Igor Santos`}
              src={getImageUrl(author.image.url)}
              mr="10px"
            />
            <div>
              <Text fontSize="1.2rem" mr="10px">{`Igor Santos`}</Text>
              <Text fontSize="0.8rem" color="gray.300">
                {postDate(published_at)}
              </Text>
            </div>
          </NewLink>
        </Flex>
      </Box>

      <Box mt="3">
        <ReactMarkdown>{description}</ReactMarkdown>
      </Box>
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none !important;
  display: flex;
  align-items: center;
`;
