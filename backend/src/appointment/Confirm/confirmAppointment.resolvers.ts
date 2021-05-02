import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers = {
  Mutation:{
    confirmAppointment: async(_,where):Promise<any> =>{
      const appointment = await client.appointments.update({data:{status:"confirm"},where})
      .catch(()=>{return null})
      if(!appointment) return { result:false, message:"예약확정에 실패하였습니다."}
      return { result:true, appointment:appointment,message:"예약이 확정되었습니다."}
    }
  }
}

export default resolvers