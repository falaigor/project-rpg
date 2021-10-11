import { useRouteMatch, Link } from "react-router-dom";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps {
  children: ReactElement;
  href: string;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { path } = useRouteMatch();
  let isActive = false;

  if (path === rest.href) {
    isActive = true;
  }

  return (
    <Link to={rest.href}>
      {cloneElement(children, {
        color: isActive ? "white.500" : "purple.500",
        bg: isActive ? "purple.500" : "",
        p: "2",
        borderRadius: "lg",
        alignItems: "center",
        fontWeight: "semibold",
      })}
    </Link>
  );
}
