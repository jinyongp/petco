import {Resolvers} from "../../types";
import {PetPayloadTypes} from "../pets.types"

const resolvers:Resolvers = {
  Mutation:{
    addPet: async(
      _,
      data,
      {client,currentUser}
      ):Promise<PetPayloadTypes> => {

        const {name,birth,gender,weight,type,in_neutered,vaccinated} = data;

        if(!name) return {ok:false,status:404};
        if(!birth) return {ok:false,status:404};
        if(!gender) return {ok:false,status:404};
        if(!weight) return {ok:false,status:404};
        if(!type) return {ok:false,status:404};
        if(in_neutered===null) return {ok:false,status:404};
        if(vaccinated===null) return {ok:false,status:404};
        if(!currentUser.id) return {ok:false,status:404};

        try{
          data.user_id = currentUser.id;
          const pets = await client.pets.create({data});
          return pets ? {ok:true,pets} : {ok:false,status:404};
        }catch(e){
          console.log(e);
          return {ok:false,status:500};
        };
        
    }
  }
};

export default resolvers;