import {Resolvers} from "../../types";
import { EstimatesPayLoadTypes } from "../estimates.types";

const resolvers:Resolvers={
  Mutation:{
    requestEstimate: async(_,data,{ client, currentUser }):Promise<EstimatesPayLoadTypes>=>{
      data.user_id = currentUser.id;
      try{
        const estimates = await client.estimates.create({data});
        return estimates ? { ok:true, estimates } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false,status:500 };
      }
    }
  }
};

export default resolvers;