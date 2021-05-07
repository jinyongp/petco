require("dotenv").config();
import {Resolvers} from "../../types"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const resolvers:Resolvers = {
  Mutation:{
    vetModify: async (_,data,client):Promise<any>=>{
      const {id,password} = data
      data.password = await bcrypt.hash(password,10);
      delete data.id
      const vet = await client.vets.update({data,where:{id}})
      if(!vet) return {status:404, message:"병원정보 변경에 실패하였습니다."}
      const token = jwt.sign({id:vet.id,hospital_id:vet.hospital_id},process.env.SECRET_KEY)
      return {status:200,vet,token, message:"병원정보 변경에 성공하였습니다."}
    }
  }
}
export default resolvers