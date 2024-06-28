import { useEffect } from "react";
import { LogBox } from "react-native";

export default function useIgnoreWarnings() {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);

    return () => {
      LogBox.ignoreAllLogs(false);
    };
  }, []);
}
