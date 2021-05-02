import {gql} from "apollo-server"

export default gql`
  type ConfirmAppointmentPayLoad{
    result:Boolean
    appointment:Appointment
    message:String
  }
  type Mutation{
    confirmAppointment(id:Int):ConfirmAppointmentPayLoad
  }
`;