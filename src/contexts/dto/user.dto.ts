import { ClienteDTO } from "./cliente.dto";
import EmpresaDTO from "./empresa.dto";

export interface User {
  id: number;
  email: string;
  recoverPassword: string;
  tipoUser: string;
  imagem: any;
  Cliente?: ClienteDTO[];
  Empresa?: EmpresaDTO[];
}
