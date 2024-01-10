import React from "react";
import { Image } from "react-native";

import { Buffer } from "buffer";

const ImagemBuffer = ({ imgBuffer, style }) => {
  const base64 = imgBuffer
    ? Buffer.from(imgBuffer, "binary").toString("base64")
    : null;
  const url = `data:image/png;base64,${base64}`;

  return (
    <React.Fragment>
      {base64 && <Image source={{ uri: url }} style={style} />}
    </React.Fragment>
  );
};

export default ImagemBuffer;
