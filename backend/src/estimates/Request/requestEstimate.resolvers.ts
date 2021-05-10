import {Resolvers} from "../../types"


const resolvers:Resolvers={
  Mutation:{
    requestEstimate: async(_,data,client):Promise<any>=>{
      // const estimate = await client.estimates.create({data}).catch(()=>{return null})
      // if(!estimate) return {status:404,message:"견적요청에 실패하였습니다."}
      // return {status:200,estimate,message:"견적요청을 완료 하였습니다."}
    }
  }
}

export default resolvers