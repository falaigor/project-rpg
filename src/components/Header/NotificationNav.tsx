import { HStack, Button, useColorMode } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiUserLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";

import styled from "styled-components";

export const NotificationNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <NewButton onClick={toggleColorMode}>
        {colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
      </NewButton>

      <NewButton>
        <RiNotificationLine />
      </NewButton>

      <NewButton>
        <RiUserLine />
      </NewButton>
    </HStack>
  );
};

const NewButton = styled(Button)`
  background: transparent;
  padding: 0;
`;
