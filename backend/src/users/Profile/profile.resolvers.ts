import { Resolvers } from "../../types";
import jwt from "jsonwebtoken";
require('dotenv').config();

const resolvers: Resolvers = {
  Query: {
    profile: async (_,__,context):Promise<any>=>{
      // TODO - show profile
      const {client,token} = context
      const {id} = jwt.verify(token,process.env.SECRET_KEY)
      const user = await client.users.findFirst({where:{id}}).catch(()=>{ return null});
      if(!user) return { status:404,message:"회원정보를 불러올 수 없습니다."}
      return {status:200,user};
    },
  },
};

export default resolvers;
