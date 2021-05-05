import { ImageSourcePropType } from "react-native";

export type ParamList = {
  EstimateDetail: {
    petInfo: {
      name: string;
      birth: string;
      profile: ImageSourcePropType;
    };
  };
};

/* QUERY or MUTATION */

export type SignInInput = {
  userId: string;
  password: string;
};

export type SignInPayload = {
  login: {
    ok: boolean;
    token: string;
    error: string;
  };
};

export type SignUpInput = {
  userId: string;
  email: string;
  phone: string;
  password: string;
  passwordCheck: string;
};

export type SignUpPayload = {
  createAccount: {
    error: string;
    user: {
      id: number;
    };
  };
};
