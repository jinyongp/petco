import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers = {
  Mutation:{
    addPet: async(_,data):Promise<any> => {
      const {name,birth,gender,weight,type,in_neutered,vaccinated,user_id} = data
      if(!name) return {result:false,message:"이름을 입력해주세요"}
      if(!birth) return {result:false,message:"생일은 입력해주세요"}
      if(!gender) return {result:false,message:"성별을 입력해주세요"}
      if(!weight) return {result:false,message:"몸무게를 입력해주세요"}
      if(!type) return {result:false,message:"종류를 입력해 주세요"}
      const pet = await client.pets.create({
        data
      }).catch(err=>{ return { result:false, message:"반려동물 등록에 실패하였습니다.",error:err}});
      
      return {result:true,pet:{...pet},message:"반려동물 등록에 성공하였습니다."}
    }
  }
}

export default resolvers;