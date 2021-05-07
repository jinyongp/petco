import { Resolvers } from "../../types";
import { UserPayloadTypes } from "../users.types";

const resolvers: Resolvers = {
  Mutation: {
    async updateUser(
      _,
      data,
      { client, currentUser }
    ): Promise<UserPayloadTypes> {
      if (!currentUser) return { ok: false, status: 404 };
      const { id } = currentUser;
      try {
        const user = await client.users.update({ data, where: { id } });
        return user ? { ok: true, user } : { ok: false, status: 404 };
      } catch (error) {
        console.error(error);
        return { ok: false, status: 500 };
      }
    },
  },
};

export default resolvers;
