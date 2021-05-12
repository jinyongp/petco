import {Resolvers} from "../../types"
import {AppointmentsPayLoadTypes} from "../appointments.types";

const resolvers:Resolvers = {
  Mutation:{
    cancelAppointment: async( _, where, {client} ):Promise<AppointmentsPayLoadTypes> =>{
      
      try{
        const appointments = await client.appointments.update({
          data:{status:"cancel"},
          where
        });
        return appointments ? { ok:true, appointments } : { ok:false, status:404 };
      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      }
    }
  }
};

export default resolvers;