import { gql } from "apollo-server";
export default gql`
  type SignInPayLoad{
    result: Boolean
    message:String
    token: String
  }
  type Query{
    signIn(email:String,password:String):SignInPayLoad
  }
`;
