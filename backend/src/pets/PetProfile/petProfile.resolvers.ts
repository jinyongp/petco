import {Resolvers} from "../../types";
import { PetProfilePayloadTypes } from "../pets.types";
const resolvers:Resolvers = {
  Query:{
    petProfile: async (_,__,{client,currentUser}):Promise<PetProfilePayloadTypes>=>{

      try{
        const {id} = currentUser;
        const pets = await client.pets.findMany({
          where:{ user_id:id },
          orderBy:{ id:"desc" }
        });
        return !pets ? {ok:false,status:404} : {ok:true,pets};
      }catch(e){
        console.log(e);
        return {ok:false,status:500};
      }
    }
  }
};
export default resolvers;