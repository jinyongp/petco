import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation : {
    vetSignOut: async (_,where,client):Promise<any>=>{
      const vet = await client.vets.delete({ where })
      .catch(()=> {return null})
      if(!vet) return {result:false,message:"병원 삭제에 실패하였습니다."}
      return {result:true,message:"병원 삭제에 성공하였습니다."}
    }
  }
}

export default resolvers