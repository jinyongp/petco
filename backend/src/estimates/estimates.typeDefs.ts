import { gql } from "apollo-server";

export default gql`
  type Estimate {
    # TODO - type definitions
    id: Int
    request_comment: String
    status: Status
    user_id:Int
    pet_id:Int
    created_at:String
    updated_at:String
  }
  type EstimatesListPayLoad{
    ok: Boolean!
    estimatesList: [Estimate]
    status: Int
  }
  type EstimatesPayLoad{
    ok: Boolean!
    estimates: Estimate
    status: Int
  }
  
  type ResponseEstimate{
    id:Int
    response_comment:String
    estimate_id:Int
    created_at:String
    updated_at:String
  }
`;
