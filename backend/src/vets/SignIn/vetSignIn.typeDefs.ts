import {gql} from "apollo-server";

export default gql`
  type VetsSignInPayLoad{
    ok:Boolean
    token:String
    status:Int
  }
  type Query{
    vetSignIn(hospital_id:String,password:String):VetsSignInPayLoad
  }
`;