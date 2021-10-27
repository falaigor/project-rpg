import { HStack, Button, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import styled from "styled-components";

export const NotificationNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack py="1" color="gray.300" spacing={["6", "8"]}>
      <NewButton onClick={toggleColorMode}>
        {colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
      </NewButton>
    </HStack>
  );
};

const NewButton = styled(Button)`
  background: transparent;
  padding: 0;
`;
