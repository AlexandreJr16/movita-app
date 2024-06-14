import ImagemBuffer from "./src/components/Default/Imagem";
import { Buffer } from "buffer";
export const arrayBufferToBase64 = (imgBuffer: any) => {
  return imgBuffer ? Buffer.from(imgBuffer, "binary").toString("base64") : null;
};
