import {Resolvers} from "../../types"
import client from "../../client"
import bcrypt from "bcrypt"
const resolvers:Resolvers = {
  Mutation:{
    vetSignUp: async (_,data):Promise<any>=>{
      const {hospital_id,password,name,location,number} = data
      if(!hospital_id) return {result:false,message:"병원등록에 실패하였습니다."}
      if(!password) return {result:false,message:"병원등록에 실패하였습니다."}
      if(!name) return {result:false,message:"병원등록에 실패하였습니다."}
      if(!location) return {result:false,message:"병원등록에 실패하였습니다."}
      if(!number) return {result:false,message:"병원등록에 실패하였습니다."}

      const passwordHash = await bcrypt.hash(password,10);
      data.password = passwordHash
      const vet = await client.vets.create({ data })
      .catch(()=>{ return null })
      if(!vet) return {result:false,message:"병원등록에 실패하였습니다."}
      return {result:true,vet,message:"병원등록에 성공하였습니다."}
    }
  }
}

export default resolvers