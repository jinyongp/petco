import {gql} from "apollo-server"

export default gql`
  type PetProfilePayLoad{
    status:Int
    pets: [Pet]
    message:String
  }
  type Query{
    petProfile(user_id:Int):PetProfilePayLoad
  }
`;