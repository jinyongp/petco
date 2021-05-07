import { gql } from "apollo-server";
export default gql`
  type DeleteUserPayLoad{
    status:Int
    message: String
  }
  type Mutation{
    deleteUser: DeleteUserPayLoad
  }
`;
