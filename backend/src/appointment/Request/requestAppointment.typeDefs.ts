import {gql} from "apollo-server"

export default gql`
  type Mutation{
    requestAppointment(
      date: String
      details: String
      vet_id: Int
      pet_id: Int
    ):AppointmentPayLoad
  }
`;