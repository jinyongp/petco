import {Resolvers} from "../../types"
import { EstimatesPayLoadTypes } from "../estimates.types";

const resolvers:Resolvers = {
  Mutation:{
    cancelEstimate: async(_,where,{client}):Promise<EstimatesPayLoadTypes> =>{

      try{
        const estimates = await client.estimates.update({ data:{ status:"cancel"}, where });
        return estimates ? { ok:true, estimates } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
}

export default resolvers