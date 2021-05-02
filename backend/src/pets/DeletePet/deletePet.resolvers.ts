import { Resolvers } from "../../types"
import client from "../../client"
const resolvers:Resolvers = {
  Mutation:{
    deletePet: async (_,where):Promise<any> =>{      
      const pet = await client.pets.delete({where}).catch(()=>{return null})
      if(!pet) return {result:true,message:"반려동물 삭제에 실패했습니다."}
      return {result:true,pet,message:"반려동물 삭제가 완료되었습니다."}
    }
  }
}

export default resolvers