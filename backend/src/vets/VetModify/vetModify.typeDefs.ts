import {gql} from "apollo-server"

export default gql`
  type VetModifyPayLoad{
    status:Int
    vet:Vet
    token:String
    message:String
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