import { gql } from "apollo-server";

export default gql`
  type ProfilePayload {
    status:Int
    user: User
    message:String
  }
  type Query {
    profile(token:String): ProfilePayload
  }
`;
