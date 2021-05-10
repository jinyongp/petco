import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Mutation:{
    confirmAppointment: async(_,where,client):Promise<any> =>{
      // const appointment = await client.appointments.update({data:{status:"confirm"},where})
      // .catch(()=>{return null})
      // if(!appointment) return { status:404, message:"예약확정에 실패하였습니다."}
      // return { status:200, appointment:appointment,message:"예약이 확정되었습니다."}
    }
  }
}

export default resolvers