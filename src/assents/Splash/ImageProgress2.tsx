import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function ImageProgress2(props) {
  return (
    <Svg
      width={50}
      height={10}
      viewBox="0 0 50 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={5} cy={5} r={5} fill="#D9D9D9" />
      <Circle cx={25} cy={5} r={5} fill="#36A5BF" />
      <Circle cx={45} cy={5} r={5} fill="#D9D9D9" />
    </Svg>
  );
}

export default ImageProgress2;
