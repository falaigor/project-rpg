import { Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { FiHome, FiTv, FiHeadphones } from "react-icons/fi";

export function SidebarNav() {
  return (
    <Flex align="stretch" pb="4">
      <NavLink icon={FiHome} href="/">
        Recente
      </NavLink>

      <NavLink icon={FiHeadphones} href="/podcasts">
        Podcasts
      </NavLink>

      <NavLink icon={FiTv} href="/lives">
        Lives
      </NavLink>
    </Flex>
  );
}
