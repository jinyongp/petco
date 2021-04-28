import { Resolvers } from "../../types";
import client from "../../client"
const resolvers: Resolvers = {
  Query: {
    profile: async (_, { id,userId }):Promise<any>=>{
      // TODO - show profile
      const user = await client.users.findFirst({
        where:{ id,userId }
      })
      if(!user) return { result:false,user:{...user},message:"회원정보를 불러올 수 없습니다."}
      return {result:true,user:{...user}};
    },
  },
};

export default resolvers;
