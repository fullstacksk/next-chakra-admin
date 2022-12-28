import { NextComponentType } from "next";
import Router from "next/router";
import React, { ComponentType, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import SkeltonLoader from "../loader/SkeltonLoader";

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
      // Temporary loading screen until re-routed to /login
      return <SkeltonLoader />;
    }

    // Renders a loading screen until auth state is determined, prevents flashing of protected page
    if (isAuthLoading || !currentUser) {
      return <SkeltonLoader />;
    }

    return <Component {...hocProps} />;
  };

  return AuthProtected;
};
