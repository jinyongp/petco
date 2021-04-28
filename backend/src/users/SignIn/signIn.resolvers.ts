require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const users = require("../../connect").users
const resolvers: Resolvers = {
  Query:{
    signIn: async (_,{userId,password}):Promise<any>=>{      
      if(!userId) return {result:false ,message: "아이디를 입력해 주세요"}
      if(!password) return {result:false, message: "비밀번호를 입력해 주세요"}
      const user = await users.users.findFirst({ where:{ userId:userId } });
      if(!user) return {result:false, message:"등록된 아이디가 없습니다."};
      const result = bcrypt.compare(password,user.password);
      if(!result) return {result:false, message:"비밀번호가 틀렸습니다."}
      
      const token = jwt.sign({id:user.id, userId:user.userId},process.env.SECRET_KEY)      
      return {result:true, token:token}
    }
  }
};

export default resolvers;