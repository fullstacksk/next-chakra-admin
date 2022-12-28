import React, { createContext, useContext, useEffect, useState } from "react";
import Router from "next/router";

interface User {
  email: string;
  displayName: string;
  avatar?: string;
}

interface IAuthContext {
  currentUser: User | null;
  currentUserToken: string | null;
  isAuthLoading: boolean;
  logout: () => void;
  login: (accessToken: string) => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserToken, setCurrentUserToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const logout = () => {
    console.log("logging out");
    localStorage.removeItem("accessToken");
    setCurrentUserToken(null);
    setCurrentUser(null);
  };

  const login = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    setCurrentUserToken(accessToken);
    setCurrentUser({
      email: "fullstacksk@gmail.com",
      displayName: "Shailendra",
    });
    Router.push("/");
  };

  useEffect(() => {
    const authorizeUser = () => {
      console.log("Running authorizeUser");
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      // No accessToken, clear auth state
      if (!accessToken) {
        setCurrentUserToken(null);
        setCurrentUser(null);
        setIsAuthLoading(false);
        return;
      }
      // accessToken Exists, check token validity
      if (accessToken) {
        setIsAuthLoading(true);
        setCurrentUserToken(accessToken);
        setCurrentUser({
          email: "fullstacksk@gmail.com",
          displayName: "Shailendra",
        });
        setIsAuthLoading(false);
        Router.push("/");
      }
    };
    return authorizeUser;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserToken,
        isAuthLoading,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuthContext };
