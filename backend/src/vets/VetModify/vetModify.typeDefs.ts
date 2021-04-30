import {gql} from "apollo-server"

export default gql`
  type VetModifyPayLoad{
    result:Boolean
    vet:Vet
    token:String
    message:String
    error:String
  }
  type Mutation{
    vetModify(
      id:Int,
      password:String,
      name:String,
      location:String,
      number:String
      ):VetModifyPayLoad
  }
`;