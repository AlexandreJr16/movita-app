interface Response {
  access_token: string;
  user: {};
}
interface SignUpResponse {
  success: boolean;
  message: string;
}

export function signIn(email: string, senha: string): Promise<Response> {
  const url = "http://192.168.0.77:3000/auth/signin";
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

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (resp) => {
      const responseData = await resp.json();
      console.log("Resposta da API:", responseData);
      return responseData;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}

export function signUp({
  email,
  senha,
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
  nome: string;
  telefone: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  cep: string;
  estado: string;
  bairro: string;
  cidade: string;
}): Promise<SignUpResponse> {
  const url = "http://192.168.0.77:3000/auth/signup"; // Verifique se a URL está correta
  const data = {
    email,
    senha,
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

  // Retorna a promise da requisição
  return fetch(url, options)
    .then(async (resp) => {
      const responseData = await resp.json();
      console.log("Resposta da API:", responseData);
      return responseData;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      // Se ocorrer um erro, você pode decidir como lidar com isso aqui
      return { success: false, message: "Erro na requisição" };
    });
}
