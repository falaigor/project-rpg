import React, { createContext, useState } from "react";

type UserType = {
  username: string;
  email: string;
};

type PropsUserContext = {
  data: UserType;
  setData: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  data: {
    username: "",
    email: "",
  },
  setData: () => {},
};

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const UserContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(DEFAULT_VALUE.data);
  return (
    <UserContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
