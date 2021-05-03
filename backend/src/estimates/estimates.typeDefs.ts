import { gql } from "apollo-server";

export default gql`
  type Estimate {
    # TODO - type definitions
    id: Int
    request_comment: String
    status: Status
    vet_id:Int
    user_id:Int
    pet_id:Int
    created_at:String
    updated_at:String
  }
`;
