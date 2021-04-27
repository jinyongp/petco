require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt"
const prisma = require("../../connect")
const resolvers: Resolvers = {
  Query:{

  },
  Mutation:{
    async signUp  (_,{userId,password,email,username,phone_number,is_valid,
                      pet_name,pet_birth,pet_gender,pet_weight,pet_type,pet_in_neutered,pet_vaccinated}):Promise<any>{
      //모든값 입력되었는지 검사
      if(!userId) return { flag:0 ,message: "아이디를 입력하여 주십시오"}
      if(!password) return { flag:0 ,message: "비밀번호를 입력하여 주십시오"}
      if(!email) return { flag:0 ,message: "이메일을 입력하여 주십시오"}
      if(!username) return { flag:0 ,message: "이름은 입력하여 주십시오"}
      if(!phone_number) return { flag:0 ,message: "핸드폰번호를 입력하여 주십시오"}
      if(!pet_name) return { flag:0 ,message: "반려동물의 이름을 입력하여 주십시오"}
      if(!pet_birth) return { flag:0 ,message: "반려동물의 생일을 입력하여 주십시오"}
      if(!pet_gender) return { flag:0 ,message: "반려동물의 성별을 입력하여 주십시오"}
      if(!pet_weight) return { flag:0 ,message: "반려동물의 몸무게를 입력하여 주십시오"}
      if(!pet_type) return { flag:0 ,message: "반려동물의 종류를 입력하여 주십시오"}
      if(pet_in_neutered===null) return { flag:0 ,message: "반려동물 중성화 수술여부를 입력하여 주십시오"}
      if(pet_vaccinated===null) return { flag:0 ,message: "반려동물 백신접종 유무를 입력하여 주십시오"}

      password = await bcrypt.hash(password, 10)
      const user = await prisma.users.create({
        data:{
          userId,email,username,phone_number,
          avatar:"no photo",
          is_valid,
          password
        }
      });      
      if(!user) return { flag:0, message:"회원가입에 실패하였습니다."}
      
      const pet = await prisma.pets.create({
        data:{
          name:pet_name,
          avatar:"no photo",
          birth:pet_birth,
          gender:pet_gender,
          weight:pet_weight,
          type:pet_type,
          in_neutered:pet_in_neutered,
          vaccinated:pet_vaccinated,
          user_id:user.id
        }
      })
      if(!pet) return { flag:0, message:"반려동물 등록에 실패하였습니다."}
      return {flag:1, message:"회원가입에 성공하였습니다."}
    }
  }
};

export default resolvers;