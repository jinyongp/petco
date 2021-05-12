import {gql} from "apollo-server"

export default gql`
  type ShowAppointmentsListPayLoad{
    ok:Boolean!
    appointmentsList:[Appointment]
    status:Int
  }
  type Query{
    showAppointmentsList:ShowAppointmentsListPayLoad
  }
`;