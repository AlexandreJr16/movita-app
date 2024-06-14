import { ClienteDTO } from "./cliente.dto";
import EmpresaDTO from "./empresa.dto";
import EnderecoDTO from "./endereco.dto";

export type updateUserDTO = {
  email: string;
  Cliente?: ClienteDTO[];
  Empresa?: EmpresaDTO[] | EmpresaDTO;
  Endereco?: EnderecoDTO;
  tipoUser: "empresa" | "cliente";
};
