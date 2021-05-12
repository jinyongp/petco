import {Resolvers} from "../../types"
import {VetsPayLoadTypes} from "../vets.types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import bcrypt from "bcrypt"
const resolvers:Resolvers = {
  Mutation:{
    vetSignUp: async (_,data,{client}):Promise<VetsPayLoadTypes>=>{
      const {hospital_id,password,name,location,number} = data
      if(!hospital_id) return {ok:false,status:404}
      if(!password) return {ok:false,status:404}
      if(!name) return {ok:false,status:404}
      if(!location) return {ok:false,status:404}
      if(!number) return {ok:false,status:404}

      try{
        const passwordHash = await bcrypt.hash(password,10);
        data.password = passwordHash;
        const vets = await client.vets.create({ data });
        
        if(!vets) return {ok:false,status:404};
        return {ok:true,vets};
      }catch(e){
        if( e instanceof PrismaClientKnownRequestError){
          const {target} = e.meta as {target: string};
          if(target === "hospital_id_unique"){
            return {ok:false,status:409} // Already hospital_id is existed
          }
        }else{
          return {ok:false,status:500};
        }
      }
    }
  }
}

export default resolvers;