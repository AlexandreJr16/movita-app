import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AddSource(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 12.5h22m-11 11v-22"
        stroke="#5A5A5A"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddSource;
