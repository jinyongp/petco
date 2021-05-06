import {Resolvers} from "../../types"


const resolvers:Resolvers={
  Mutation:{
    modifyPet: async (_,data,client):Promise<any>=>{
      const {id} = data
      delete data.id
      const pet = await client.pets.update({data,where:{id}}).catch(()=> {return null})
      if(!pet) return {result:false,message:"반려동물 정보수정에 실패하였습니다."}
      return {result:true,pet,message:"반려동물 정보수정에 성공하였습니다."}
    }
  }
}

export default resolvers;