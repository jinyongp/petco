import { gql } from "apollo-server";
export default gql`
  type Query{
    signIn(userId:String,password:String):SignInPlayLoad
  }
`;