require("dotenv").config();
import {Resolvers} from "../../types";
import { VetsPayLoadTypes } from "../vets.types";

const resolvers:Resolvers = {
  Mutation:{
    updateVet: async (_,data,{client,currentVets}):Promise<VetsPayLoadTypes>=>{
      const {id} = currentVets;
      try{
        const vets = await client.vets.update({ data, where: { id }});
        return vets ? { ok:true, vets } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};
export default resolvers;