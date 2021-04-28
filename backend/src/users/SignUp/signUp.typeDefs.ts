import { gql } from "apollo-server";
export default gql`
  type SignUpPayLoad{
    result: Boolean
    message: String
    user:User
  }
  type Query{
    userIdDuplicateTest(userId:String): SignUpPayLoad
    emailDuplicateTest(email:String): SignUpPayLoad
  }
  type Mutation{
    signUp(
      userId:String
      email:String
      avatar:String
      password:String
      phone_number:String
      username:String
      is_valid:Boolean
      pet_name:String
      pet_birth:String
      pet_gender:String
      pet_weight:String
      pet_type:PetType
      pet_in_neutered:Boolean
      pet_vaccinated:Boolean
    ): SignUpPayLoad
  }
`;
