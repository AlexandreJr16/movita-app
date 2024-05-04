import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SetaUp(props) {
  return (
    <Svg
      width={33}
      height={15}
      viewBox="0 0 33 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26 12L16 2 6 12"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SetaUp;
