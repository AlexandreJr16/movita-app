// export let API_URL = "https://movita-backend.onrender.com";
export let API_URL = "http://192.168.0.92:3333";

export const setApiUrl = (param: string) => {
  console.log(param);
  API_URL = param;
};
