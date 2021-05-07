import { gql } from "apollo-server";
export default gql`
  type SignInPayLoad{
    status:Int
    message:String
    token: String
  }
  type Query{
    signIn(email:String,password:String):SignInPayLoad
  }
`;
