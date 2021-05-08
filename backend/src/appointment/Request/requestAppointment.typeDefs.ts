import {gql} from "apollo-server"

export default gql`
  type RequestAppointmentPayLoad{
    status:Int
    appointment:Appointment
    message:String
  }
  type Mutation{
    requestAppointment(
      date: String
      vet_id: Int
      user_id: Int
      pet_id: Int
    ):RequestAppointmentPayLoad
  }
`;