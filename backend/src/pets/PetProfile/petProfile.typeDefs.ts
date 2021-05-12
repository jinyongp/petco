import {gql} from "apollo-server"

export default gql`
  type PetProfilePayLoad{
    ok:Boolean
    pets: [Pet]
    status:Int
  }
  type Query{
    petProfile:PetProfilePayLoad
  }
`;