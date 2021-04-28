import { gql } from "apollo-server";

export default gql`
  type ProfilePayload {
    user: User
  }
  type Query {
    profile(id: Int,userId:String): ProfilePayload
  }
`;
