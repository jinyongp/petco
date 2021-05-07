import {gql} from "apollo-server"

export default gql`
  type VetProfilePayLoad{
    status:Int
    vet:Vet
    message:String
  }
  type Query{
    vetProfile(id:Int,hospital_id:String):VetProfilePayLoad
  }
`;