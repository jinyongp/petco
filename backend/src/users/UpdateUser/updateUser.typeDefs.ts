import { gql } from "apollo-server";

export default gql`
  type Mutation {
    updateUser(avatar: String, phone_number: String): UserPayload
  }
`;
