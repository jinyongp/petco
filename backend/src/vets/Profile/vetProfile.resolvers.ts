import {Resolvers} from "../../types";
import {VetsPayLoadTypes} from "../vets.types";

const resolvers:Resolvers = {
  Query:{
    vetProfile: async (_,where,{currentVets}):Promise<VetsPayLoadTypes>=>{
      return currentVets ? {ok:true,vets:currentVets} : { ok:false, status:404 };
    }
  }
};

export default resolvers;