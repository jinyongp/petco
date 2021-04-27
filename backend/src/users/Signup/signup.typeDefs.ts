import { gql } from "apollo-server";
export default gql`
  type SignUpPlayLoad{
    flag: Int
    message: String
  }
  type Query{
    userIdDuplicateTest(userId:String): SignInPlayLoad
    emailDuplicateTest(email:String): SignInPlayLoad
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
    ): SignUpPlayLoad
  }
`;
