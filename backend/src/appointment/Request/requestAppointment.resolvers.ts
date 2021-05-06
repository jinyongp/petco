import {Resolvers} from "../../types"

const resolvers:Resolvers={
  Mutation:{
    requestAppointment: async (_,data,client):Promise<any> =>{      
      const appointment = await client.appointments.create({data})
      .catch(err=> {return null})
      if(!appointment) return {result:false, message:"예약신청을 실패하였습니다."}
      return {result:true,appointment, message:"예약신청이 완료되었습니다."}
    }
  }
}

export default resolvers