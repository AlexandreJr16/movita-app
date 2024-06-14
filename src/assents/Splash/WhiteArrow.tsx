import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WhiteArrow(props) {
  return (
    <Svg
      width={52}
      height={10}
      viewBox="0 0 52 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 5h50.5m0 0l-3-4m3 4l-3 4.5" stroke="#fff" />
    </Svg>
  );
}

export default WhiteArrow;
