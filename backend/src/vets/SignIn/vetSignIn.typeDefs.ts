import {gql} from "apollo-server"

export default gql`
  type VetSignInPayLoad{
    result:Boolean
    token:String
    message:String
  }
  type Query{
    vetSignIn(hospital_id:String,password:String):VetSignInPayLoad
  }
`;