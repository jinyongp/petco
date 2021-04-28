import { Resolvers } from "../../types";
const prisma = require("../../connect")
const resolvers: Resolvers = {
  Query: {
    async profile(_, { id,userId }):Promise<any> {
      // TODO - show profile
      const user = await prisma.users.findFirst({
        where:{ id,userId }
      })
      return {user:{...user,password:null}};
    },
  },
};

export default resolvers;
