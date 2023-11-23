export function signIn(email: string, senha: string) {
  const url = "http://172.17.208.1:3000/auth/signin";
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
}) {
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
