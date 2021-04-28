import { gql } from "apollo-server";
export default gql`
  type SignInPayLoad{
    result: Boolean
    message:String
    token: String
  }
  type Query{
    signIn(userId:String,password:String):SignInPayLoad
  }
`;
