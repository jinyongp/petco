import { gql } from "apollo-server";
export default gql`
  type AddPetPayLoad{
    pet:Pet
    status:Int
    message:String
  }
  type Mutation{
    addPet(
      name: String
      birth: String
      gender: String
      weight: String
      type: PetType
      in_neutered: Boolean
      vaccinated: Boolean
      user_id: Int
    ):AddPetPayLoad
  }
`;