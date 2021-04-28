require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
const prisma = require("../../connect")
const resolvers: Resolvers = {
  Query:{

  },
  Mutation:{
    async signUp  (_,{userId,password,email,username,phone_number,is_valid}):Promise<any>{
      //모든값 입력되었는지 검사
      if(!userId) return { result:0 ,message: "아이디를 입력하여 주십시오"}
      if(!password) return { result:0 ,message: "비밀번호를 입력하여 주십시오"}
      if(!email) return { result:0 ,message: "이메일을 입력하여 주십시오"}
      if(!username) return { result:0 ,message: "이름은 입력하여 주십시오"}
      if(!phone_number) return { result:0 ,message: "핸드폰번호를 입력하여 주십시오"}

      password = await bcrypt.hash(password, 10)
      const user = await prisma.users.create({
        data:{
          userId,email,username,phone_number,
          avatar:"no photo",
          is_valid,
          password
        }
      });
      if(!user) return { result:0, message:"회원가입에 실패하였습니다."}
      return {result:1, message:"회원가입에 성공하였습니다."}
    }
  }
};

export default resolvers;