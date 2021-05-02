import { Resolvers } from "../../types";
import client from "../../client"
const resolvers: Resolvers = {
  Query: {
    profile: async (_, where):Promise<any>=>{
      // TODO - show profile      
      const user = await client.users.findFirst({where}).catch(()=>{ return null});
      if(!user) return { result:false,message:"회원정보를 불러올 수 없습니다."}
      return {result:true,user};
    },
  },
};

export default resolvers;
