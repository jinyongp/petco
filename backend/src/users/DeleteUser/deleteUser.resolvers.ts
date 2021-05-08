import { Resolvers } from "../../types";
import { UserPayloadTypes } from "../users.types";

const resolvers: Resolvers = {
  Mutation: {
    async deleteUser(
      _,
      __,
      { client, currentUser }
    ): Promise<UserPayloadTypes> {
      try {
        const { id } = currentUser;
        const deletedUser = await client.users.delete({ where: { id } });
        return deletedUser ? { ok: true } : { ok: false, status: 404 };
      } catch (error) {
        console.error(error);
        return { ok: false, status: 500 };
      }
    },
  },
};

export default resolvers;
