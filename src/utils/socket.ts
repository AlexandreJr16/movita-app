// Importe io do socket.io-client
import { io } from "socket.io-client";
import { API_URL } from "../../configs";

// Importe a URL da API da configuração

// Crie o objeto socket e conecte-se à URL da API
const socket = io(API_URL);

// Adicione logs para depuração
socket.on("connect", () => {
  // console.log("Conectado ao servidor");
});

socket.on("disconnect", () => {
  // console.log("Desconectado do servidor");
});

socket.on("connect_error", (error) => {
  // console.error("Erro de conexão:", error);
});

socket.on("error", (error) => {
  // console.error("Erro no socket:", error);
});

export default socket;
