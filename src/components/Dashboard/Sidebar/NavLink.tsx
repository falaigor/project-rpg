import { Link } from "react-router-dom";
import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkPorps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkPorps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link to={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
