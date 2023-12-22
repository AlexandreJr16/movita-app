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
