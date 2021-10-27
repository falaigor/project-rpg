import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkPorps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { useRouteMatch } from "react-router-dom";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkPorps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  const { path } = useRouteMatch();
  let isActive = false;

  if (path === href) {
    isActive = true;
  }

  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="16" />
        <Text ml="2" fontWeight={isActive ? "semibold" : "lighter"}>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
