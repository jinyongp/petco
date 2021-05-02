import { gql } from "apollo-server";
export default gql`
  type UserModifyPayLoad{
    result:Boolean
    message:String
    user:User
  }
  type Mutation{
    userModify(
      id:Int
      password:String
      email:String
      avatar:String
      phone_number:String
      is_valid:Boolean
      ):UserModifyPayLoad
  }

`;
