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

type ProfileProps = {
  username: string;
  email: string;
  logout: () => void;
};

export const Profile = ({ logout, username, email }: ProfileProps) => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{username}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>

      <Menu>
        <MenuButton>
          <Avatar as={Button} size="md" name="Igor Santos" />
        </MenuButton>
        <MenuList>
          <Divider />
          <MenuItem onClick={logout}>
            <RiLogoutBoxLine />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
