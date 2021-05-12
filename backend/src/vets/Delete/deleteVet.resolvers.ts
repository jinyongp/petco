import {Resolvers} from "../../types"
import {VetsPayLoadTypes} from "../vets.types";

const resolvers:Resolvers = {
  Mutation : {
    deleteVet: async (_,__,{client,currentVets}):Promise<VetsPayLoadTypes>=>{
      const {id} = currentVets;

      try{
        if(!id) return { ok:false, status:404 };
        const vets = await client.vets.delete({ where: { id }});
        return vets ? { ok:true, vets} : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      }
    }
  }
};

export default resolvers;