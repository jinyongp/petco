import {gql} from "apollo-server"

export default gql`
  type CancelAppointmentPayLoad{
    result:Boolean
    appointment:Appointment
    message:String
  }
  type Mutation{
    cancelAppointment(id:Int):CancelAppointmentPayLoad
  }
`;