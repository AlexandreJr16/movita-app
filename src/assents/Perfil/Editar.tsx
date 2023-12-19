import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EditarPerfil(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.979 3.76l1.248-1.248c.832-.833 2.995-1.998 4.992 0 1.997 1.997.833 4.16 0 4.992l-1.248 1.249M14.98 3.76L1.248 17.49v4.993H6.24l13.73-13.73M14.98 3.76l4.992 4.993M2.247 16.49l4.993 4.993"
        stroke="#fff"
        strokeWidth={1.41216}
      />
    </Svg>
  );
}

export default EditarPerfil;
