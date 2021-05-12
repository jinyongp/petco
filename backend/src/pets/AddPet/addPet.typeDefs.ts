import { gql } from "apollo-server";
export default gql`
  type Mutation{
    addPet(
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