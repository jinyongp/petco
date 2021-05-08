import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Query:{
    vetProfile: async (_,where,client):Promise<any>=>{
      const vet = await client.vets.findFirst({ where })
      .catch(()=>{ return null });
      if(!vet) return { status:404, message:"병원정보를 불러올 수 없습니다."}      
      return {status:200, vet:vet, message:"병원정보 불러오기를 성공하였습니다."}
    }
  }
}

export default resolvers