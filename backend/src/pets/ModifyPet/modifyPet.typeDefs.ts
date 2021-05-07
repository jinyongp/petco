import {gql} from "apollo-server"

export default gql`
  type ModifyPetPayLoad{
    status:Int
    pet:Pet
    message:String
  }
  type Mutation{
    modifyPet(
      id: Int
      name: String
      birth: String
      weight: String
      in_neutered: Boolean
      vaccinated: Boolean      
    ):ModifyPetPayLoad
  }
`;