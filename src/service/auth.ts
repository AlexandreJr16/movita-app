interface Response {
  access_token: string;
}

export function signIn(email: string, senha: string): Promise<Response> {
  const url = "http://192.168.30.173:3000/auth/signin";
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
