import { API_URL } from "../../configs";

type ErroResponse = {
  error: string;
  message: string;
  status: number;
};
type UserResponse = {
  token: string;
  user: object;
};

export const signIn = (email: string, senha: string): Promise<UserResponse> => {
  const url = API_URL + "/auth/signin";
  const data = {
    email: email,
    senha: senha,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(url, options)
    .then(async (resp) => resp.json())
    .then((data) => data)
    .catch((error) => {
      return console.log(error + "oi");
    });
};

export function signUp({
  email,
  senha,
  tipo_usuario,
  nome,
  telefone,
  cpf,
  sexo,
  nascimento,
  cep,
  estado,
  bairro,
  cidade,
}: {
  email: string;
  senha: string;
  tipo_usuario: string;
  nome: string;
  telefone: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  cep: string;
  estado: string;
  bairro: string;
  cidade: string;
}) {
  const url = API_URL + "/auth/signup";
  const data = {
    email,
    senha,
    tipo_usuario,
    nome,
    telefone,
    cpf,
    sexo,
    nascimento,
    cep,
    estado,
    bairro,
    cidade,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const user = fetch(url, options)
    .then(async (resp) => {
      const responseData = await resp.json();
      console.log("Resposta da API:", responseData);
      return { id: responseData.id };
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      return { success: false, message: "Erro na requisição" };
    });
  return user;
}
