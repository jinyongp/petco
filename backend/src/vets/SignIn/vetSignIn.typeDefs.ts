import {gql} from "apollo-server"

export default gql`
  type Query{
    vetSignIn(hospital_id:String,password:String):VetsPayLoad
  }
`;