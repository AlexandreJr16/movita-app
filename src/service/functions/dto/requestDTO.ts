export type UserResponse = {
  token?: string;
  user?: object;
  message?: string;
  status: string;
};
export type ErrorResponse = {
  error: string;
  message: string;
  status: number;
};
export type UpdateUserResponse = {
  user?: any;
  cliente?: any;
  empresa?: any;
  endereco?: any;
  message: string;
};
export type updateSenhaDTO = {
  status: string;
  message?: string;
  user?: any;
};
