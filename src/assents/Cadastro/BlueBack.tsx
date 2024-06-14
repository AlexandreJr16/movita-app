import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BlueBack(props) {
  return (
    <Svg
      width={35}
      height={33}
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 7L2 17l10 10"
        stroke="#36A5BF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BlueBack;
