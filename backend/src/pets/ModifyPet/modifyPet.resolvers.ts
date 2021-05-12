import {Resolvers} from "../../types";
import { PetPayloadTypes } from "../pets.types";

const resolvers:Resolvers={
  Mutation:{
    modifyPet: async (
      _,
      data,
      {client}
      ):Promise<PetPayloadTypes>=>{
        const {id} = data;
        if(!id) return {ok:false,status:404};
        try{
          delete data.id;
          const pets = await client.pets.update({ data, where:{ id } });
          return pets ? {ok:true,pets} : {ok:false,status:404};
        }catch(e){
          console.log(e);
          return {ok:false,status:500};
        };
    }
  }
};

export default resolvers;