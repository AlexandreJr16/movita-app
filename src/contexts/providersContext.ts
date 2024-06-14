import { useState, useEffect, createContext } from "react";

export const AuthContex = createContext({});

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  return { user, setUser, token, setToken, loading, setLoading };
};

//Se eu te falar que nem eu lembro oq é isso
