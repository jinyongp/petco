import { gql } from "apollo-server";
export default gql`
  type SignOutPayLoad{
    status:Int
    message: String
  }
  type Mutation{
    signOut: SignOutPayLoad
  }
`;
