import {gql} from "apollo-server"

export default gql`
  type CancelEstimatePayLoad{
    status:Int
    estimate:Estimate
    message:String
  }
  type Mutation{
    cancelEstimate(id:Int):CancelEstimatePayLoad
  }
`;