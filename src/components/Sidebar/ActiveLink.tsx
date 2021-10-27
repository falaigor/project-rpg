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
        p: "2",
        borderRadius: "lg",
        alignItems: "center",
        fontWeight: isActive ? "extrabold" : "lighter",
      })}
    </Link>
  );
}
