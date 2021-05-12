import {Resolvers} from "../../types";
import {EstimatesListPayLoadTypes} from "../estimates.types"

const resolvers:Resolvers={
  Query:{
    showMyRequestedEstimatesList: async(_,__,{client,currentUser}):Promise<EstimatesListPayLoadTypes>=>{
      if(!currentUser) return { ok:false, status:404 };

      try{
        const estimatesList = await client.estimates.findMany({ where:{ user_id:currentUser.id }});
        return estimatesList ? { ok:true, estimatesList } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};

export default resolvers;