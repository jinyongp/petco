require("dotenv").config();
import {Resolvers} from "../../types"
import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const resolvers:Resolvers = {
  Mutation:{
    vetModify: async (_,data):Promise<any>=>{
      const {id,password} = data
      data.password = await bcrypt.hash(password,10);
      delete data.id
      const vet = await client.vets.update({data,where:{id}})
      if(!vet) return {result:false, message:"병원정보 변경에 실패하였습니다."}
      const token = jwt.sign({id:vet.id,hospital_id:vet.hospital_id},process.env.SECRET_KEY)
      return {result:true,vet,token, message:"병원정보 변경에 성공하였습니다."}
    }
  }
}
export default resolvers