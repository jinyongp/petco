import {gql} from "apollo-server";

export default gql`
  type Mutation{
    responseEstimate(
      estimate_id:Int
      response_comment:String
      ):ResponsePayLoad
  }
`;