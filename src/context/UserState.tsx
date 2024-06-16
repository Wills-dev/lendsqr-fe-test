import React, { useEffect, useState, createContext } from "react";

export const UserContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const UserState = ({ children }: Props) => {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("lendsqrCurrentUser");
    if (isLoggedIn) {
      const user = JSON.parse(isLoggedIn);
      setUser(user);
    }
  }, []);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserState;
