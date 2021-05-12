import { gql } from "apollo-server";

export default gql`
  enum Status{
    request
    confirm
    cancel
  }
  type AppointmentPayLoad{
    ok:Boolean!
    appointments:Appointment
    status:Int

  }
  type Appointment {    
    # TODO - type definitions
    id: Int!
    status:Status!
    date: String
    vet_id: Int!
    user_id: Int!
    pet_id: Int!
    created_at: String
    updated_at: String
  }
`;
