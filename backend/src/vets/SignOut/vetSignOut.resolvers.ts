import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers = {
  Mutation : {
    vetSignOut: async (_,where):Promise<any>=>{
      console.log("시작")
      const vet = await client.vets.delete({ where })
      .catch(err=> {return {result:false,message:"병원 삭제에 실패하였습니다.",error:err}})
      return {result:true,message:"병원 삭제에 성공하였습니다."}
    }
  }
}

export default resolvers