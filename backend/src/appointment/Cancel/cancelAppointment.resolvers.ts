import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation:{
    cancelAppointment: async(
      _,
      where,
      {client,currentUser}
      ):Promise<any> =>{
        const appointment = await client.appointments.update({data:{status:"cancel"},where})
        .catch(()=>{return null})
        if(!appointment) return { status:404, message:"예약 취소에 실패하였습니다."}
        return { status:200, appointment,message:"예약이 취소되었습니다."}
    }
  }
}

export default resolvers