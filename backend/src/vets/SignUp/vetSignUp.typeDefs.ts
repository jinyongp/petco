import {gql} from "apollo-server"

export default gql`
  type VetSignUpPayLoad{
    status:Int
    vet: Vet
    message: String
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