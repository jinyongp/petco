import {gql} from "apollo-server"

export default gql`
  type PetProfilePayLoad{
    result: Boolean
    pets: [Pet]
    message:String
    error:String
  }
  type Query{
    petProfile(user_id:Int):PetProfilePayLoad
  }
`;