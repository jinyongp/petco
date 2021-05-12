import {gql} from "apollo-server"

export default gql`
  type Mutation{
    cancelEstimate(id:Int):EstimatesPayLoad
  }
`;