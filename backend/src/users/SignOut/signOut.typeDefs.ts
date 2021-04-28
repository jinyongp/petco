import { gql } from "apollo-server";
export default gql`
  type SignOutPayLoad{
    result: Boolean
    message: String
  }
  type Mutation{
    signOut(id:Int): SignOutPayLoad
  }
`;
