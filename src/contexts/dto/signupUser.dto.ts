interface signupUser {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cpf: string;
  sexo: {
    _index: number;
    value: string;
    label: string;
  };
  dia: string;
  mes: {
    _index: number;
    value: string;
    label: string;
  };
  ano: string;
  cep: string;
  estado: string;
  bairro: string;
  cidade: string;
  senha: string;
  confirmSenha: string;
  data: string;
}
