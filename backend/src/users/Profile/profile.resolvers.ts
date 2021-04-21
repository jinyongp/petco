import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    profile(_, { username }) {
      // TODO - show profile
      return { user: { id: 1, username } };
    },
  },
};

export default resolvers;
