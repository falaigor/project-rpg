import { Box, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return <h1>Sidebar Mobile</h1>;
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
