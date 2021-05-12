import {Resolvers} from "../../types"


const resolvers:Resolvers={
  Mutation:{
    responseEstimate: async(_,data,client):Promise<any>=>{
      // const response = await client.estimates.create({data}).catch(()=>{return null})
      // if(!response) return {status:404,message:"견적 보내기 실패하였습니다."}
      // return {status:200,response,message:"견적 보내기를 완료 하였습니다."}
    }
  }
}

export default resolvers