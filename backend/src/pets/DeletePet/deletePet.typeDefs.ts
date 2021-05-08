import { gql } from "apollo-server"

export default gql`
  type DeletePetPayLoad{
    status:Int
    pet:Pet
    message:String
  }
  type Mutation{
    deletePet(id:Int):DeletePetPayLoad
  }
`; 