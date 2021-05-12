import {gql} from "apollo-server"

export default gql`
  type Mutation{
    requestEstimate(
      request_comment:String
      pet_id:Int
    ):EstimatesPayLoad
  }
`;