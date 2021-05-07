import {gql} from "apollo-server"

export default gql`
  type VetSignInPayLoad{
    status:Int
    token:String
    message:String
  }
  type Query{
    vetSignIn(hospital_id:String,password:String):VetSignInPayLoad
  }
`;