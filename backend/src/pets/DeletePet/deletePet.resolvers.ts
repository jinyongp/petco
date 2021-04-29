import { Resolvers } from "../../types"
import client from "../../client"
const resolvers:Resolvers = {
  Mutation:{
    deletePet: async (_,where):Promise<any> =>{      
      const pet = await client.pets.delete({
        where
      })
      .catch(err=>{ return { result:false, message:"반려동물 삭제에 실패하였습니다.", error:err} })
      return {result:true,message:"반려동물 삭제가 완료되었습니다.",pet:pet}
    }
  }
}

export default resolvers