require("dotenv").config();
import {Resolvers} from "../../types"
import client from "../../client"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const resolvers:Resolvers={
  Query:{
    vetSignIn: async (_,where):Promise<any>=>{
      const {hospital_id,password} = where
      
      if(!hospital_id) return {result:false,message:"아이디를 입력해 주세요"}
      if(!password) return {result:false,message:"비밀번호를 입력해 주세요"}
      const vet = await client.vets.findFirst({where:{hospital_id}})
      if(!vet) return {result:false,message:"등록된 아이디가 없습니다."}
      const result = await bcrypt.compare(password,vet.password)
      if(!result) return {result:false,message:"비밀번호가 틀렸습니다."}
      
      const token = jwt.sign({id:vet.id,hospital_id:vet.hospital_id},process.env.SECRET_KEY)
      return {result:true,token,message:"로그인에 성공하였습니다."}
    }
  }
}

export default resolvers