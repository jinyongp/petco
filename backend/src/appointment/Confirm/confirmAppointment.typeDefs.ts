import {gql} from "apollo-server"

export default gql`
  type Mutation{
    confirmAppointment(id:Int):AppointmentPayLoad
  }
`;