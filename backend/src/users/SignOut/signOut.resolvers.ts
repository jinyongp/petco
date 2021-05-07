import { Resolvers } from "../../types";
import jwt from "jsonwebtoken";
require('dotenv').config();
const resolvers: Resolvers = {
  Mutation:{
    signOut: async (_,data,client):Promise<any>=>{
      const {id} = jwt.verify(data.token,process.env.SECRET_KEY)
      const user = await client.users.delete({ where:{id} })
      if(!user) return { status:404, message:"회원탈퇴에 실패하였습니다."}
      return {status:200, message:"회원탈퇴에 성공하였습니다."}
    }
  }
};

export default resolvers;