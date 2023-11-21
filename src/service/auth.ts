export function signIn(email: string, senha: string) {
  //   const url = "http://localhost:3000/auth/signin";
  //   const data = {
  //     email: email,
  //     senha: senha,
  //   };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   return fetch(url, options)
  //     .then((resp) => {
  //       if (!resp.ok) {
  //         throw new Error("Erro na requisição");
  //       }
  //       return resp.json();
  //     })
  //     .then((data) => data)
  //     .catch((error) => {
  //       console.error("Erro na requisição:", error);
  //     });

  return { email, senha };
}
