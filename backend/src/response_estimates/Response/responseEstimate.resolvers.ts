import {Resolvers} from "../../types";
import {ResponsePayLoadTypes} from "../response.types";
const resolvers:Resolvers = {
  Mutation:{
    responseEstimate: async ( _, data, { client, currentVets }):Promise<ResponsePayLoadTypes>=>{
      if(!currentVets) return { ok:false, status:404 };
      data.vet_id = currentVets.id

      try{
        const response = await client.response_estimate.create({data});
        return response ? { ok:true, response} : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};

export default resolvers;