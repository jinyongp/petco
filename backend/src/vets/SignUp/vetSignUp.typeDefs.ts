import {gql} from "apollo-server"

export default gql`
  type Mutation{
    vetSignUp(
      hospital_id:String
      password:String
      name:String
      location:String
      number:String
      ):VetsPayLoad
  }
`;