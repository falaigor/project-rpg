import { Flex, Link, useColorMode } from "@chakra-ui/react";
import { FiBookmark } from "react-icons/fi";

import { motion } from "framer-motion";
import styled from "styled-components";

interface ActionsProps {
  likes: number;
}

export const Actions = ({ likes }: ActionsProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex mt="6" justifyContent="space-between">
      <Flex>
        <NewLink
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          bg={colorMode === "light" ? "gray.20" : "gray.600"}
          p="2"
        >
          👏️👏️👏️ {likes}
        </NewLink>

        <NewLink
          justifyContent="center"
          alignItems="center"
          borderRadius="lg"
          bg={colorMode === "light" ? "gray.20" : "gray.600"}
          p="2"
          ml="10px"
        >
          <FiBookmark />
        </NewLink>
      </Flex>
    </Flex>
  );
};

const NewLink = styled(motion(Link))`
  text-decoration: none !important;
  display: flex;
  align-items: center;

  :hover {
    transform: scale(0.95) translateZ(0px);
  }
`;
