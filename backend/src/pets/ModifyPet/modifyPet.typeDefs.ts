import {gql} from "apollo-server"

export default gql`
  type ModifyPetPayLoad{
    status:Int
    pet:Pet
    message:String
  }
  type Mutation{
    modifyPet(
      id:Int
      name: String
      birth: String
      gender: PetGenderType
      weight: String
      type: PetType
      in_neutered: Boolean
      vaccinated: Boolean
      ):PetPayload
  }
`;