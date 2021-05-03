import {gql} from "apollo-server"

export default gql`
  type requestEstimatePayLoad{
    result:Boolean
    estimate:Estimate
    message:String
  }
  type Mutation{
    requestEstimate(
      request_comment:String
      vet_id:Int
      user_id:Int
      pet_id:Int
    ):requestEstimatePayLoad
  }
`;