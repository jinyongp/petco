import { gql } from "apollo-server";

export default gql`
  type ProfilePayload {
    result: Boolean
    user: User
    message:String
    error:String
  }
  type Query {
    profile(id: Int,userId:String): ProfilePayload
  }
`;
