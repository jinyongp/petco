import { ImageSourcePropType } from "react-native";
import { User } from "../../@types/models";

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

type Response = {
  ok: boolean;
  status?: number;
  user?: User;
};

export type UserPayload = {
  signIn: Response & {
    token?: string;
  };
  signUp: Response;
};
