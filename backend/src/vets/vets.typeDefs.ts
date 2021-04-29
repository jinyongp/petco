import { gql } from "apollo-server";

export default gql`
  type Vet {    
    # TODO - type definitions
    id: Int
    hospital_id: String
    password: String
    name: String
    location: String
    number: String
    created_at: String
    updated_at: String
  }
`;
