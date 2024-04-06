// Formatar data para string
export const formattedDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return `${day} ${month}`;
};
