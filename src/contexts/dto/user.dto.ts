export interface User {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  tipo: string;
  endereco: { cidade: string; cep: string; estado: string; bairro: string };
  img: any;
}
