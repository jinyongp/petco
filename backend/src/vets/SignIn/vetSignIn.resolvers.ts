require("dotenv").config();
import {Resolvers} from "../../types";
import {VetsPayLoadTypes} from "../vets.types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const resolvers:Resolvers={
  Query:{
    vetSignIn: async (_,where,{client}):Promise<VetsPayLoadTypes>=>{

      const {hospital_id,password} = where;
      if(!hospital_id) return {ok:false,status:404};
      if(!password) return {ok:false,status:404};

      try{
        const vets = await client.vets.findFirst({where:{hospital_id}});
        if(!vets) return {ok:false,status:404};

        const status = await bcrypt.compare(password,vets.password);
        if(!status) return {ok:false,status:404};

        return {ok:true,vets}
      }catch(e){
        console.log(e)
        return { ok:false , status:500}
      };
    }
  }
}

export default resolvers