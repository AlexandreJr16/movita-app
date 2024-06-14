import EnderecoDTO from "./endereco.dto";

export default interface EmpresaDTO {
  Endereco?: EnderecoDTO;
  nomeFantasia?: string;
  cnpj?: string;
  telefone?: string;
}
