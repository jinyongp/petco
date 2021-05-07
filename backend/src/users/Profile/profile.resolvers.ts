import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    profile: async (_,__,context):Promise<any>=>{
      // TODO - show profile
      const {client,user} = context
      if(!user) return { status:404,message:"회원정보를 불러올 수 없습니다."}
      return {status:200,user};
    },
  },
};

export default resolvers;
