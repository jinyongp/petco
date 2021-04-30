import {gql} from "apollo-server"

export default gql`
  type VetProfilePayLoad{
    result:Boolean
    vet:Vet
    message:String
    error:String
  }
  type Query{
    vetProfile(id:Int,hospital_id:String):VetProfilePayLoad
  }
`;