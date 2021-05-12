import {Resolvers} from "../../types"
import {AppointmentsListPayLoadTypes} from "../appointments.types";

const resolvers:Resolvers = {
  Query:{
    showAppointmentsList: async(_,where,{client,currentUser,currentVets}):Promise<AppointmentsListPayLoadTypes>=>{

      if(currentUser) { where.user_id = currentUser.id }  //회원
      else if(currentVets) {where.vet_id = currentVets.id}  //병원
      else if(!currentUser || !currentVets) { return { ok:false, status:404 } };
      
      try{
        
        const appointmentsList = await client.appointments.findMany({where});
        return appointmentsList ? { ok:true, appointmentsList} : { ok:false, status:404 };

      }catch(e){
        console.log(e);
        return { ok:false, status:500 };
      };
    }
  }
};

export default resolvers;