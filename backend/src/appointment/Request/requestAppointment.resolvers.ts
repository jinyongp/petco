import {Resolvers} from "../../types";
import {AppointmentsPayLoadTypes} from "../appointments.types";
const resolvers:Resolvers={
  Mutation:{
    requestAppointment: async (_,data,{client,currentUser}):Promise<AppointmentsPayLoadTypes> =>{
      const {date,details,vet_id,pet_id} = data;
      data.user_id = currentUser.id;

      if(!date) return { ok:false, status:404 };
      if(!vet_id) return { ok:false, status:404 };
      if(!pet_id) return { ok:false, status:404 };
      if(!details) return { ok:false, status:404 };

      try{
        
        const appointments = await client.appointments.create({data});
        return appointments ? { ok:true, appointments } : { ok:false, status:404 };

      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};

export default resolvers;