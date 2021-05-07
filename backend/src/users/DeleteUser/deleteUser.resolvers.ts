import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation:{
    deleteUser: async (_,__,context):Promise<any>=>{
      const {client,user} = context
      const result = await client.users.delete({ where:{id:user.id} })
      if(!result) return { status:404, message:"회원탈퇴에 실패하였습니다."}
      return {status:200, message:"회원탈퇴에 성공하였습니다."}
    }
  }
};

export default resolvers;