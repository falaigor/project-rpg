import { Flex } from "@chakra-ui/react";
import { FiBookmark } from "react-icons/fi";

type ActionsProps = {
  likes: number;
};

export const Actions = ({ likes }: ActionsProps) => {
  return (
    <Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="lg"
        bg="gray.600"
        p="2"
      >
        👏️👏️👏️ {likes}
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="lg"
        bg="gray.600"
        p="2"
        ml="10px"
      >
        <FiBookmark />
      </Flex>
    </Flex>
  );
};
