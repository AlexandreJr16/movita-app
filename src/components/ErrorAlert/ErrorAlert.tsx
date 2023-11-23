import Texto from "../texto/Texto";

const ErrorAlert = ({ children, styles, isAlert }) => {
  return isAlert == true ? (
    <Texto weight="regular" style={styles}>
      {children}
    </Texto>
  ) : null;
};
export default ErrorAlert;
