import EnderecoDTO from "./endereco.dto";

export interface ClienteDTO {
  cpf: string;
  nascimento: string;
  nome: string;
  sexo: string;
  sobrenome: string;
  telefone: string;
  Endereco: EnderecoDTO;
}
