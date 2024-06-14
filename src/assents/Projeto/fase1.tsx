import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function Fase1(props: any) {
  return (
    <Svg
      width={300}
      height={500}
      viewBox="0 0 390 684"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M148.887 109c59.667-8.833 181.5-22 181.5 136 0 81-42.1 128.7-156.5 121.5-61.501 2.5-128 31.8-114 155 12 76 75.8 114.8 179 104"
        stroke="#5F5F5F"
        strokeWidth={20}
        strokeLinecap="round"
      />
      <Circle cx={72.5} cy={72.5} r={72.5} fill="#1966C0" />
      <Circle cx={317.5} cy={235.5} r={72.5} fill="#444" />
      <Circle cx={77.5} cy={494.5} r={72.5} fill="#444" />
      <Circle cx={314.5} cy={611.5} r={72.5} fill="#444" />
    </Svg>
  );
}

export default Fase1;
