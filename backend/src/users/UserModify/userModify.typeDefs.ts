import { gql } from "apollo-server";
export default gql`
  type UserModifyPayLoad{
    status:Int
    message:String
    user:User
  }
  type Mutation{
    userModify(
      avatar:String
      phone_number:String
      ):UserModifyPayLoad
  }

`;
