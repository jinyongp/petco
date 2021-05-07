import {gql} from "apollo-server"

export default gql`
  type VetSignOutPayLoad{
    status:Int
    message:String
  }
  type Mutation{
    vetSignOut(id:Int):VetSignOutPayLoad
  }
`;