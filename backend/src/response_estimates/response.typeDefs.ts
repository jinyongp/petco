import { gql } from "apollo-server";

export default gql`

  type ResponsePayLoad{
    ok:Boolean!
    response:Response
    status: Int
  }

  type Response{
    id: Int!
    vet_id: Int!
    response_comment: String
    estimate_id: Int!
    created_at:String
    updated_at:String
  }
`;