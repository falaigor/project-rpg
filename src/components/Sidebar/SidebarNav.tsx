import { Flex, List, Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { FiHome, FiTv, FiHeadphones } from "react-icons/fi";

export function SidebarNav() {
  return (
    <Flex w="100%" maxWidth={280}>
      <List spacing={3} width={200}>
        <Stack align="stretch">
          <NavLink icon={FiHome} href="/">
            Home
          </NavLink>

          <NavLink icon={FiHeadphones} href="/podcasts">
            Podcasts
          </NavLink>

          <NavLink icon={FiTv} href="/lives">
            Lives
          </NavLink>

          <NavLink icon={FiHome} href="/te">
            Encontre mesas
          </NavLink>
          <NavLink icon={FiHome} href="/tes">
            Encontre mestres
          </NavLink>
        </Stack>
      </List>
    </Flex>
  );
}
