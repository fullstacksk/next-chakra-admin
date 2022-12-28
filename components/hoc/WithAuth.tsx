import { NextComponentType } from "next";
import Router from "next/router";
import React, { ComponentType, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

export const WithAuth = <T,>(Component: ComponentType<T>) => {
  const AuthProtected = (hocProps: any) => {
    const { isAuthLoading, currentUser } = useAuthContext();
    useEffect(() => {
      if (!isAuthLoading && !currentUser) {
        Router.push("/login");
      }
    });
    // Redirect to login page if user is not logged in
    if (!isAuthLoading && !currentUser) {
      return <h1>Loading...1...</h1>; // Temporary loading screen until re-routed to /login
    }

    // Renders a loading screen until auth state is determined, prevents flashing of protected page
    if (isAuthLoading || !currentUser) {
      return <h1>Loading...2...</h1>;
    }

    return <Component {...hocProps} />;
  };

  return AuthProtected;
};
