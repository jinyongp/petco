import {gql} from "apollo-server"

export default gql`
  type CancelAppointmentPayLoad{
    status:Int
    appointment:Appointment
    message:String
  }
  type Mutation{
    cancelAppointment(id:Int):CancelAppointmentPayLoad
  }
`;