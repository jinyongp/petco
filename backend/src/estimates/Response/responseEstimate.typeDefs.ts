import {gql} from "apollo-server"

export default gql`
  type responseEstimatePayLoad{
    result:Boolean
    response:ResponseEstimate
    message:String
  }
  type Mutation{
    responseEstimate(
      estimate_id:Int
      response_comment:String
    ):responseEstimatePayLoad
  }
`;