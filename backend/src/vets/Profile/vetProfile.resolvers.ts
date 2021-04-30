import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers = {
  Query:{
    vetProfile: async (_,where)=>{
      const vet = await client.vets.findFirst({ where })
      .catch(err=>{ return { result:false, message:"병원정보를 불러올 수 없습니다.", error:err }});
      
      return {result:true, vet:vet, message:"병원정보 불러오기를 성공하였습니다."}
    }
  }
}

export default resolvers