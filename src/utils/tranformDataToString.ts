export const formattedDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Adicionar um zero à esquerda se os minutos forem menores que 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes}`;
};
