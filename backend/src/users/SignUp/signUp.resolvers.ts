require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"

const resolvers: Resolvers = {
  Mutation:{
    signUp: async (_,data,context):Promise<any>=>{
      const {password,email,username,phone_number} = data
      const {client} = context
      //모든값 입력되었는지 검사
      if(!email) return { status:404 ,message: "이메일을 입력하여 주십시오"}
      if(!password) return { status:404 ,message: "비밀번호를 입력하여 주십시오"}
      if(!username) return { status:404 ,message: "이름은 입력하여 주십시오"}
      if(!phone_number) return { status:404 ,message: "핸드폰번호를 입력하여 주십시오"}

      const passwordHash = await bcrypt.hash(password, 10)
      data.password = passwordHash
      const user = await client.users.create({ data });
      if(!user) return { status:404, message:"회원가입에 실패하였습니다."}
      return {user:{...user,password:null},status:200, message:"회원가입에 성공하였습니다."}
    }
  }
};

export default resolvers;