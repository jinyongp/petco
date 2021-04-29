import { gql } from "apollo-server"

export default gql`
  type DeletePetPayLoad{
    result:Boolean
    pet:Pet
    message:String
    error:String
  }
  type Mutation{
    deletePet(id:Int):DeletePetPayLoad
  }
`; 