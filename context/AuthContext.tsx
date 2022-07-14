import { createContext, ReactNode, useContext, useState } from "react";
import { UserType } from "../types";

interface authContextType {
  user: UserType | null;
  login: (user: UserType | null) => void;
  logout: () => void;
}

const authContextDefaultValues: authContextType = {
  user: null,
  login: (user = null) => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

type PropsType = {
  children: ReactNode;
};

export function AuthProvider({ children }: PropsType) {
  const [user, setUser] = useState<UserType | null>(null);

  function logout(): void {}

  function login(user: UserType | null): void {
    setUser(user);
  }

  const value = {
    user,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
