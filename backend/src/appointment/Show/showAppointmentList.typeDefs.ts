import {gql} from "apollo-server"

export default gql`
  type ShowAppointmentListPayLoad{
    status:Int
    appointments:[Appointment]
    message:String
  }
  type Query{
    showAppointmentList(user_id:Int):ShowAppointmentListPayLoad
  }
`;