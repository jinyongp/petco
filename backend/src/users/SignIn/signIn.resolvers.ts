require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import client from "../../client"
const resolvers: Resolvers = {
  Query:{
    signIn: async(_,data):Promise<any>=>{
      const {userId,password} = data;
      if(!userId) return {result:0 ,message: "아이디를 입력해 주세요"}
      if(!password) return {result:0, message: "비밀번호를 입력해 주세요"}
      const user = await client.users.findFirst({ where:{ userId } });
      if(!user) return {result:false, message:"등록된 아이디가 없습니다."};
      const result = await bcrypt.compare(password,user.password);
      if(!result) return {result:false, message:"비밀번호가 틀렸습니다."}
      
      const token = jwt.sign({id:user.id, userId:user.userId},process.env.SECRET_KEY)      
      return {result:true, message:"로그인에 성공하였습니다.",token}
    }
  }
};

export default resolvers;