import {Resolvers} from "../../types"
import client from "../../client"
import bcrypt from "bcrypt"
const resolvers:Resolvers = {
  Mutation:{
    vetSignUp: async (_,args):Promise<any>=>{
      const {hospital_id,password,name,location,number} = args
      if(!hospital_id) return {result:false,message:"병원등록에 실패하였습니다.",error:"hospital_id is undefined"}
      if(!password) return {result:false,message:"병원등록에 실패하였습니다.",error:"password is undefined"}
      if(!name) return {result:false,message:"병원등록에 실패하였습니다.",error:"name is undefined"}
      if(!location) return {result:false,message:"병원등록에 실패하였습니다.",error:"location is undefined"}
      if(!number) return {result:false,message:"병원등록에 실패하였습니다.",error:"number is undefined"}

      const passwordHash = await bcrypt.hash(password,10);
      const vet = await client.vets.create({
        data:{
          ...args,
          password:passwordHash
        }
      })
      .catch(err=>{ return {result:false,message:"병원등록에 실패하였습니다.",error:err} })
      return {result:true,vet:vet,message:"병원등록에 성공하였습니다."}
    }
  }
}

export default resolvers