import {Resolvers} from "../../types"

import bcrypt from "bcrypt"
const resolvers:Resolvers  = {
  Mutation:{
    userModify: async (_,data,client)=>{
      const {id,password} = data
      const passwordHash = await bcrypt.hash(password, 10)
      data.password = passwordHash
      const user = await client.users.update({
        data,
        where:{ id }
      })
      .catch(()=>{ return null })
      if(!user) return {status:false,message:"회원정보 수정에 실패하였습니다."}
      return {status:200, user, message:"회원정보 수정이 완료되었습니다."}
    }
  }
}

export default resolvers