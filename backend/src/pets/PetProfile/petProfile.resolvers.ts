import {Resolvers} from "../../types"
import client from "../../client"
const resolvers:Resolvers = {
  Query:{
    petProfile: async (_,args):Promise<any>=>{
      const pets = await client.pets.findMany({
        where:{ ...args },
        orderBy:{id:"desc"}
      })
      .catch(err=>{ return {result:true,message:"반려동물 목록 가져오기에 실패하였습니다.",error:err} })      
      return {result:true,pets:pets,message:"반려동물 목록 가져오기에 성공하였습니다."}
    }
  }
}
export default resolvers