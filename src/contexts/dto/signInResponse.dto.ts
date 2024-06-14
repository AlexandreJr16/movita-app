export type SignInResponse =
  | {
      message?: string;
      token?: string;
      user?: object;
      status: string;
    }
  | null
  | undefined;
