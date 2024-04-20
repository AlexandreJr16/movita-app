import * as React from "react"
import Svg, { Rect, Path, Circle } from "react-native-svg"

function VitaNotFound(props) {
  return (
    <Svg
      width={201}
      height={138}
      viewBox="0 0 201 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={25.9512}
        width={149.07}
        height={108.634}
        rx={12.0704}
        fill="#999"
      />
      <Rect
        x={31.9863}
        y={6.03516}
        width={60.3521}
        height={96.5634}
        rx={6.03522}
        fill="#D9D9D9"
      />
      <Rect
        x={108.633}
        y={6.03516}
        width={60.3521}
        height={96.5634}
        rx={6.03522}
        fill="#D9D9D9"
      />
      <Path
        d="M120.705 54.318h36.211M43.705 54.318h36.211"
        stroke="#999"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Path
        d="M173.814 57.334l24.141 41.813M27.158 57.334L3.018 99.147M70.613 132.773v-24.14M130.965 132.773v-24.14"
        stroke="#999"
        strokeWidth={2.41409}
      />
      <Circle cx={197.955} cy={99.5801} r={3.01761} fill="#999" />
      <Circle cx={3.01761} cy={99.5801} r={3.01761} fill="#999" />
      <Rect
        x={62.1621}
        y={131.568}
        width={12.0704}
        height={6.03521}
        rx={3.01761}
        fill="#999"
      />
      <Rect
        x={127.344}
        y={131.568}
        width={12.0704}
        height={6.03521}
        rx={3.01761}
        fill="#999"
      />
    </Svg>
  )
}

export default VitaNotFound
