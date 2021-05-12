require("dotenv").config();
import {Resolvers} from "../../types"

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const resolvers:Resolvers={
  Query:{
    vetSignIn: async (_,where,client):Promise<any>=>{
      const {hospital_id,password} = where
      
      if(!hospital_id) return {status:404,message:"아이디를 입력해 주세요"}
      if(!password) return {status:404,message:"비밀번호를 입력해 주세요"}
      // const vet = await client.vets.findFirst({where:{hospital_id}})
      // if(!vet) return {status:404,message:"등록된 아이디가 없습니다."}
      // const status = await bcrypt.compare(password,vet.password)
      // if(!status) return {status:404,message:"비밀번호가 틀렸습니다."}
      
      // const token = jwt.sign({id:vet.id,hospital_id:vet.hospital_id},process.env.SECRET_KEY)
      // return {status:200,token,message:"로그인에 성공하였습니다."}
    }
  }
}

export default resolvers