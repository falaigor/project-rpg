import React from "react";
import { UserContextProvider } from "./UserContext";

export const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};
