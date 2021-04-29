import {gql} from "apollo-server"

export default gql`
  type VetSignUpPayLoad{
    result: Boolean
    vet: Vet
    message: String
    error: String
  }
  type Mutation{
    vetSignUp(
      hospital_id:String
      password:String
      name:String
      location:String
      number:String
      ):VetSignUpPayLoad
  }
`;