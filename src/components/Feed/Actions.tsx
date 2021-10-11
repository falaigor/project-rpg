import { Flex, Link, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBookmark } from "react-icons/fi";
import styled from "styled-components";

type ActionsProps = {
  likes: number;
};

export const Actions = ({ likes }: ActionsProps) => {
  const { colorMode } = useColorMode();

  return (
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
  );
};

const NewLink = styled(motion(Link))`
  text-decoration: none !important;
  display: flex;

  :hover {
    transform: scale(0.95) translateZ(0px);
  }
`;
