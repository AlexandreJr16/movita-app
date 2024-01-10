import { useState, useEffect, createContext } from "react";
import * as auth from "../service/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

export const AuthContex = createContext({});

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  return { user, setUser, token, setToken, loading, setLoading };
};
