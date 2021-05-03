import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers={
  Mutation:{
    responseEstimate: async(_,data):Promise<any>=>{
      const response = await client.estimates.create({data}).catch(()=>{return null})
      if(!response) return {result:false,message:"견적 보내기 실패하였습니다."}
      return {result:true,response,message:"견적 보내기를 완료 하였습니다."}
    }
  }
}

export default resolvers