import {gql} from "apollo-server"

export default gql`
  type Mutation{
    updateVet(
      name:String,
      location:String,
      number:String
      ):VetsPayLoad
  }
`;