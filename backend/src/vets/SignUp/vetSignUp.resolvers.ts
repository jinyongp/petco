import {Resolvers} from "../../types"

import bcrypt from "bcrypt"
const resolvers:Resolvers = {
  Mutation:{
    vetSignUp: async (_,data,client):Promise<any>=>{
      const {hospital_id,password,name,location,number} = data
      if(!hospital_id) return {status:404,message:"병원등록에 실패하였습니다."}
      if(!password) return {status:404,message:"병원등록에 실패하였습니다."}
      if(!name) return {status:404,message:"병원등록에 실패하였습니다."}
      if(!location) return {status:404,message:"병원등록에 실패하였습니다."}
      if(!number) return {status:404,message:"병원등록에 실패하였습니다."}

      const passwordHash = await bcrypt.hash(password,10);
      data.password = passwordHash
      const vet = await client.vets.create({ data })
      .catch(()=>{ return null })
      if(!vet) return {status:404,message:"병원등록에 실패하였습니다."}
      return {status:200,vet,message:"병원등록에 성공하였습니다."}
    }
  }
}

export default resolvers