import {Resolvers} from "../../types"

const resolvers:Resolvers = {
  Query:{
    petProfile: async (_,where,client):Promise<any>=>{
      const pets = await client.pets.findMany({where,orderBy:{id:"desc"}})
      .catch(()=>{return null})
      if(!pets) return {status:200,message:"반려동물 목록 가져오기에 실패하였습니다."}
      return {status:200,pets:pets,message:"반려동물 목록 가져오기에 성공하였습니다."}
    }
  }
}
export default resolvers