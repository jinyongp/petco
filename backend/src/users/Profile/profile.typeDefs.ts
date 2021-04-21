import { gql } from "apollo-server";

export default gql`
  type ProfilePayload {
    user: User
    error: String
  }
  type Query {
    profile(username: String!): ProfilePayload
  }
`;
