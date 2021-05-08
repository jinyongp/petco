import { Resolvers } from "../../types";
import { UserPayloadTypes } from "../users.types";

const resolvers: Resolvers = {
  Query: {
    profile: async (_, __, { currentUser }): Promise<UserPayloadTypes> => {
      return currentUser
        ? { ok: true, user: currentUser }
        : { ok: false, status: 404 };
    },
  },
};

export default resolvers;
