import {gql} from "apollo-server"

export default gql`
  type CancelEstimatePayLoad{
    result:Boolean
    estimate:Estimate
    message:String
  }
  type Mutation{
    cancelEstimate(id:Int):CancelEstimatePayLoad
  }
`;