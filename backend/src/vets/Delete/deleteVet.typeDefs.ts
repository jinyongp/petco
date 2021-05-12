import {gql} from "apollo-server"

export default gql`
  type Mutation{
    deleteVet:VetsPayLoad
  }
`;