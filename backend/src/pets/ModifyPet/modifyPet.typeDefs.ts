import {gql} from "apollo-server"

export default gql`
  type Mutation{
    modifyPet(
      id:Int
      name: String
      birth: String
      gender: String
      weight: String
      type: PetType
      in_neutered: Boolean
      vaccinated: Boolean
      ):PetPayload
  }
`;