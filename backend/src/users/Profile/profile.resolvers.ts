import { Resolvers } from "../../types";
import client from "../../client"
const resolvers: Resolvers = {
  Query: {
    profile: async (_, args):Promise<any>=>{
      // TODO - show profile
      const { id,userId } = args
      const user = await client.users.findFirst({
        where:{ id,userId }
      })
      .catch(err=>{ return { result:false,user:{...user},message:"회원정보를 불러올 수 없습니다.",error:err}});
      return {result:true,user:{...user,password:null}};
    },
  },
};

export default resolvers;
