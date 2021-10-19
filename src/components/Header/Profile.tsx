import { useContext } from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri";

import { UserContext } from "Hooks/UserContext";

export const Profile = () => {
  const { data } = useContext(UserContext);

  console.log(data);

  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{data.username}</Text>
        <Text color="gray.300" fontSize="small">
          {data.email}
        </Text>
      </Box>

      <Menu>
        <MenuButton>
          <Avatar as={Button} size="md" name="Igor Santos" />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <Divider />

          <MenuItem>
            <RiLogoutBoxLine />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
