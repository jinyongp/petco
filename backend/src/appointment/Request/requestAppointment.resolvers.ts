import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers={
  Mutation:{
    requestAppointment: async (_,data):Promise<any> =>{      
      const appointment = await client.appointments.create({data})
      .catch(err=> {return null})
      if(!appointment) return {result:false, message:"예약신청을 실패하였습니다."}
      return {result:true,appointment, message:"예약신청이 완료되었습니다."}
    }
  }
}

export default resolvers