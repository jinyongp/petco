import { gql } from "apollo-server";
export default gql`
  type User {
    id: Int
    username: String
    email: String
    avatar: String
    password: String
    phone_number: String
    is_valid: Boolean
    created_at: String
    updated_at: String
    # TODO - type definitions
  }
`;
