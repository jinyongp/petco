import { gql } from "apollo-server";
export default gql`
  type SignInPlayLoad{
    flag: Int
    token: String
  }
  type Query{
    signIn(userId:String,password:String):SignInPlayLoad
  }
`;
