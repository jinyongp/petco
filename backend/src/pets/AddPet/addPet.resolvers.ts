import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation:{
    addPet: async(_,data,client):Promise<any> => {
      const {name,birth,gender,weight,type,in_neutered,vaccinated,user_id} = data
      if(!name) return {status:404,message:"이름을 입력해주세요"}
      if(!birth) return {status:404,message:"생일은 입력해주세요"}
      if(!gender) return {status:404,message:"성별을 입력해주세요"}
      if(!weight) return {status:404,message:"몸무게를 입력해주세요"}
      if(!type) return {status:404,message:"종류를 입력해 주세요"}
      const pet = await client.pets.create({data}).catch(()=>{return null});
      if(!pet) return {status:404,pet,message:"반려동물 등록에 실패하였습니다."}
      return {status:200,pet,message:"반려동물 등록에 성공하였습니다."}
    }
  }
}

export default resolvers;