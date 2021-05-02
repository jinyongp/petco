import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers={
  Mutation:{
    requestAppointment: async (_,data):Promise<any> =>{      
      const appointment = await client.appointments.create({data})
      .catch(err=> {return null})
      console.log(appointment)
      if(!appointment) return {result:false, message:"예약신청을 실패하였습니다."}
      return {result:true,appointment, message:"이걸로간다고?"}
    }
  }
}

export default resolvers