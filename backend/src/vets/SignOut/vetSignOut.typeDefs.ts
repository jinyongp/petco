import {gql} from "apollo-server"

export default gql`
  type VetSignOutPayLoad{
    result:Boolean
    message:String
    error:String
  }
  type Mutation{
    vetSignOut(id:Int):VetSignOutPayLoad
  }
`;