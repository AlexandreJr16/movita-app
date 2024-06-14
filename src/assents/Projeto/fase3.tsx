import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function Fase3(props: any) {
  return (
    <Svg
      width={300}
      height={500}
      viewBox="0 0 385 652"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M143.887 57c59.667-8.833 181.5-22 181.5 136 0 81-42.1 128.7-156.5 121.5-61.501 2.5-128 31.8-114 155 12 76 75.8 114.8 179 104"
        stroke="#5F5F5F"
        strokeWidth={20}
        strokeLinecap="round"
      />
      <Path
        d="M63 397c8.5-20.333 42-67 115-63 37.5 4.667 117.5-2.3 137.5-67.5M137.5 78.499C167.5 74.5 273 51.497 312 135.998"
        stroke="#3482DC"
        strokeWidth={20}
        strokeLinecap="round"
      />
      <Circle cx={72.5} cy={72.5} r={72.5} fill="#3A8BE9" />
      <Circle cx={312.5} cy={203.5} r={72.5} fill="#3A8BE9" />
      <Circle cx={72.5} cy={462.5} r={72.5} fill="#1966C0" />
      <Circle cx={309.5} cy={579.5} r={72.5} fill="#444" />
    </Svg>
  );
}

export default Fase3;
