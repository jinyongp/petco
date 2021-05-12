import {Resolvers} from "../../types"
import {AppointmentsPayLoadTypes} from "../appointments.types";

const resolvers:Resolvers = {
  Mutation:{
    cancelAppointment: async( _, where, {client,currentUser,currentVets} ):Promise<AppointmentsPayLoadTypes> =>{
      if(currentUser) { where.user_id = currentUser.id }  //회원
      else if(currentVets) {where.vet_id = currentVets.id}  //병원
      else if(!currentUser || !currentVets) { return { ok:false, status:404 } };
    }
  }
};

export default resolvers;