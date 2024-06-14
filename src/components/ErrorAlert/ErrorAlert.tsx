import React from "react";
import Texto from "../Default/texto/Texto";

const ErrorAlert = ({ children, styles, isAlert }) => {
  return (
    <Texto weight="regular" style={isAlert ? styles : { opacity: 0 }}>
      {children}
    </Texto>
  );
};
export default ErrorAlert;
