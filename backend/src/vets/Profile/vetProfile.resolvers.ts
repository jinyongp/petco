import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Query:{
    vetProfile: async (_,where,client):Promise<any>=>{
      const vet = await client.vets.findFirst({ where })
      .catch(()=>{ return null });
      if(!vet) return { result:false, message:"병원정보를 불러올 수 없습니다."}      
      return {result:true, vet:vet, message:"병원정보 불러오기를 성공하였습니다."}
    }
  }
}

export default resolvers