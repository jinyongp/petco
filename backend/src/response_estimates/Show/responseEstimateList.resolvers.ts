import {Resolvers} from "../../types";
import {ResponseListPayLoadTypes} from "../response.types";

const resolvers:Resolvers = {
  Query:{
    //요청 하나에 달린 견적들 리스트
    responseEstimateList: async (_,where,{client}):Promise<ResponseListPayLoadTypes> => {
      try{
        const responseList = await client.response_estimate.findMany({ where });
        return responseList ? { ok:true, responseList } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    },

    //병원이 응답했던 견적들 리스트
    vetResponseEstimateList: async (_,where,{client,currentVets}):Promise<ResponseListPayLoadTypes> => {
      
      if(!currentVets) return  { ok:false, status:404 };
      where.vet_id = currentVets.id;
      
      try{
        const responseList = await client.response_estimate.findMany({ where });
        console.log(responseList)
        return responseList ? { ok:true, responseList } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }

};

export default resolvers;