import {Resolvers} from "../../types"
import jwt from "jsonwebtoken";
require('dotenv').config();

import bcrypt from "bcrypt"
const resolvers:Resolvers  = {
  Mutation:{
    userModify: async (_,data,context)=>{
      const {client,user} = context
      if(!user) return {status:404,message:"로그인이 필요합니다."}
      const {id} = user
      const result = await client.users.update({
        data,
        where:{ id }
      })
      if(!result) return {status:404,message:"회원정보 수정에 실패하였습니다."}
      return {status:200, user, message:"회원정보 수정이 완료되었습니다."}
    }
  }
}

export default resolvers