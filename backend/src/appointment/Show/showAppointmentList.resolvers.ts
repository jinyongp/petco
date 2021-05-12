import {Resolvers} from "../../types"


const resolvers:Resolvers = {
  Query:{
    showAppointmentList: async(_,where,client):Promise<any>=>{
      // const appointments = await client.appointments.findMany({where}).catch(()=>{return null})
      // if(!appointments) return {status:404,message:"예약 목록 불러오기에 실패하였습니다."}
      // return {status:200,appointments,message:"예약목록 불러오기에 성공했습니다."}
    }
  }
}

export default resolvers