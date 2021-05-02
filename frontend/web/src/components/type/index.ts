export type SignInInput = {
  hospital_id: string;
  password: string;
};

export type SignInPayload = {
  login: {
    ok: boolean;
    token: string;
    error: string;
  };
};
