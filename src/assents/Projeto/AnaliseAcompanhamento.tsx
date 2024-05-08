import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function AnaliseAcompanhamento(props) {
  return (
    <Svg
      width={321}
      height={561}
      viewBox="0 0 321 561"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M119.612 63.009c49.6-7.343 150.879-18.29 150.879 113.055 0 67.334-34.997 106.987-130.097 101.001-51.125 2.079-106.405 26.435-94.767 128.85 9.976 63.178 63.012 95.432 148.801 86.454"
        stroke="#fff"
        strokeWidth={16.6258}
        strokeLinecap="round"
      />
      <Circle cx={62.2684} cy={60.2684} r={60.2684} fill="#36A5BF" />
      <Circle cx={259.778} cy={168.167} r={60.2684} fill="#36A5BF" />
      <Circle cx={60.2684} cy={383.472} r={60.2684} fill="#36A5BF" />
      <Circle cx={257.284} cy={500.731} r={60.2684} fill="#36A5BF" />
    </Svg>
  );
}

export default AnaliseAcompanhamento;
