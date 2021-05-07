import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation:{
    cancelEstimate: async(_,where,client):Promise<any> =>{      
      const estimate = await client.estimates.update({data:{status:"cancel"},where})
      .catch(()=>{return null})
      if(!estimate) return { status:false, message:"견적요청 취소에 실패하였습니다."}
      return { status:200, estimate,message:"견적요청이 취소되었습니다."}
    }
  }
}

export default resolvers