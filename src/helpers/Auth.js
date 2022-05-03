import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase";

export const AuthContext = React.createContext({ user: null });

const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = auth.currentUser;
    return { initializing: !user, user };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};
export const AuthProvider = ({ children }) => {
  const { initializing, user } = useAuth();
  if (initializing) return <CircularProgress />;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
