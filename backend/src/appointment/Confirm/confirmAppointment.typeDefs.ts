import {gql} from "apollo-server"

export default gql`
  type ConfirmAppointmentPayLoad{
    status:Int
    appointment:Appointment
    message:String
  }
  type Mutation{
    confirmAppointment(id:Int):ConfirmAppointmentPayLoad
  }
`;