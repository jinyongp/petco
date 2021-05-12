require("dotenv").config();
import {Resolvers} from "../../types";
import {VetsSignInPayLoadTypes} from "../vets.types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const resolvers:Resolvers={
  Query:{
    vetSignIn: async (_,where,{client}):Promise<VetsSignInPayLoadTypes>=>{

      const {hospital_id,password} = where;
      if(!hospital_id) return {ok:false,status:404};
      if(!password) return {ok:false,status:404};

      try{
        const vets = await client.vets.findFirst({where:{hospital_id}});
        if(!vets) return {ok:false,status:404};

        const status = await bcrypt.compare(password,vets.password);
        if(!status) return {ok:false,status:401};

        const token = await jwt.sign({ id:vets.id, userType:"vets" }, process.env.SECRET_KEY )

        return {ok:true,token};
      }catch(e){
        console.log(e);
        return { ok:false , status:500};
      };
    }
  }
};

export default resolvers;