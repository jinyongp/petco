require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const resolvers: Resolvers = {
  Query:{
    signIn: async(_,data,client):Promise<any>=>{
      const {email,password} = data;
      if(!email) return {status:401 ,message: "Email is null"}
      if(!password) return {status:402, message: "Password is null"}
      const user = await client.users.findFirst({ where:{ email } });
      if(!user) return {status:403, message:"Not found ( Invalid email )"};
      const status = await bcrypt.compare(password,user.password);
      if(!status) return {status:404, message:"Not found ( Invalid password )"}
    
      const token = jwt.sign(user,process.env.SECRET_KEY)
      return {status:200, message:"로그인에 성공하였습니다.",token}
    }
  }
};

export default resolvers;