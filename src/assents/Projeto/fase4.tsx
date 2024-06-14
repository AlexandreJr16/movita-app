import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function Fase4(props: any) {
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
        d="M143.887 77c59.667-8.833 181.5-22 181.5 136 0 81-42.1 128.7-156.5 121.5-61.501 2.5-128 31.8-114 155 12 76 75.8 114.8 179 104"
        stroke="#3482DC"
        strokeWidth={20}
        strokeLinecap="round"
      />
      <Circle cx={72.5} cy={72.5} r={72.5} fill="#3A8BE9" />
      <Circle cx={312.5} cy={203.5} r={72.5} fill="#3A8BE9" />
      <Circle cx={72.5} cy={462.5} r={72.5} fill="#3A8BE9" />
      <Circle cx={309.5} cy={579.5} r={72.5} fill="#1966C0" />
    </Svg>
  );
}

export default Fase4;
