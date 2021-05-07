import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    profile: async (_, where,client):Promise<any>=>{
      // TODO - show profile      
      const user = await client.users.findFirst({where}).catch(()=>{ return null});
      if(!user) return { status:false,message:"회원정보를 불러올 수 없습니다."}
      return {status:200,user};
    },
  },
};

export default resolvers;
