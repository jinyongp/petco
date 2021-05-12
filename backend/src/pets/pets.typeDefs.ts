import { gql } from "apollo-server";

export default gql`
  enum PetType{
    cat
    dog
  }
  type PetPayload{
    ok: Boolean
    pets: Pet
    status: Int
  }
  type Pet {
    id: Int!
    name: String!
    avatar: String
    birth:  String
    gender: String!
    weight: String!
    type: PetType!
    in_neutered: Boolean!
    vaccinated: Boolean!
    user_id: Int!
    created_at:String
    updated_at:String
    # TODO - type definitions
  }
`;
