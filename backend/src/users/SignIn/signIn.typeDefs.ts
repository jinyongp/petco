import { gql } from "apollo-server";

export default gql`
  type SignInPayLoad {
    ok: Boolean!
    status: Int
    token: String
    user: User
  }
  type Query {
    signIn(email: String!, password: String!): SignInPayLoad
  }
`;
