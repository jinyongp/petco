import {Resolvers} from "../../types"
import client from "../../client"

const resolvers:Resolvers = {
  Query:{
    showAppointmentList: async(_,where):Promise<any>=>{
      const appointments = await client.appointments.findMany({where}).catch(()=>{return null})
      if(!appointments) return {result:false,message:"예약 목록 불러오기에 실패하였습니다."}
      return {result:true,appointments,message:"예약목록 불러오기에 성공했습니다."}
    }
  }
}

export default resolvers