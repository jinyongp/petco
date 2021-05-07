import { Resolvers } from "../../types"

const resolvers:Resolvers = {
  Mutation:{
    deletePet: async (_,where,client):Promise<any> =>{      
      const pet = await client.pets.delete({where}).catch(()=>{return null})
      if(!pet) return {status:200,message:"반려동물 삭제에 실패했습니다."}
      return {status:200,pet,message:"반려동물 삭제가 완료되었습니다."}
    }
  }
}

export default resolvers