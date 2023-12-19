import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WhiteArrowPerfil(props) {
  return (
    <Svg
      width={27}
      height={25}
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.424 5.303L25 12.879l-7.576 7.575"
        stroke="#fff"
        strokeWidth={2.27273}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default WhiteArrowPerfil;
