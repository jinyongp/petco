import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation:{
    cancelAppointment: async(_,where,context):Promise<any> =>{      
      const appointment = await context.appointments.update({data:{status:"cancel"},where})
      .catch(()=>{return null})
      if(!appointment) return { result:false, message:"예약 취소에 실패하였습니다."}
      return { result:true, appointment,message:"예약이 취소되었습니다."}
    }
  }
}

export default resolvers