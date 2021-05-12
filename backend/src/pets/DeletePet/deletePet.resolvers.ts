import { Resolvers } from "../../types";
import { PetPayloadTypes } from "../pets.types";

const resolvers:Resolvers = {
  Mutation:{
    deletePet: async (
      _,
      where,
      {client}
      ):Promise<PetPayloadTypes> =>{
        try{
          const pets = await client.pets.delete({where});
          return !pets ? {ok:false,status:404} : {ok:true,pets};
        }catch(e){
          console.log(e);
          return {ok:false,status:500};
        }
    }
  }
};

export default resolvers;