import { gql } from "apollo-server";

export default gql`
  enum PetType{
    cat
    dog
  }
  type Pet {
    id: Int!
    # TODO - type definitions
  }
`;
