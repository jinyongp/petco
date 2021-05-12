import {Resolvers} from "../../types";
import {EstimatesListPayLoadTypes} from "../estimates.types"

const resolvers:Resolvers={
  Query:{
    showAllRequestedEstimatesList: async(_,__,{client,currentVets}):Promise<EstimatesListPayLoadTypes>=>{
      if(!currentVets) return { ok:false, status:400 };

      try{
        const estimatesList = await client.estimates.findMany({orderBy:{id:"asc"}});
        return estimatesList ? { ok:true, estimatesList } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};

export default resolvers;