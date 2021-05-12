import {gql} from "apollo-server"

export default gql`
  type Mutation{
    cancelAppointment(id:Int):AppointmentPayLoad
  }
`;