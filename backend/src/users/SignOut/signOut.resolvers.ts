import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation:{
    signOut: async (_,where,client):Promise<any>=>{
      const user = await client.users.delete({ where })
      if(!user) return { result:false, message:"회원탈퇴에 실패하였습니다."}
      return {result:true, message:"회원탈퇴에 성공하였습니다."}
    }
  }
};

export default resolvers;