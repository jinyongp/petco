import { ImageSourcePropType } from "react-native";

export type ParamList = {
  EstimateDetail: {
    petInfo: {
      name: string;
      birth: string;
      profile: ImageSourcePropType;
    };
  };
  SelectLocation: {
    latitude: number;
    longitude: number;
  };
  SignIn: {
    email: string;
  };
};

/* QUERY or MUTATION */

type User = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  phone_number: string;
  is_valid: string;
  created_at: string;
  updated_at: string;
};

type Response = {
  ok: boolean;
  status?: number;
};

export type UserPayload = {
  signIn: Response & {
    token?: string;
  };
  signUp: Response & {
    user?: User;
  };
};
