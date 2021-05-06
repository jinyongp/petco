import {gql} from "apollo-server"

export default gql`
  type Mutation{
    userUpload(
      id:Int
      file:String
    ):S3Object
  }
  type S3Object{
    ETag: String!
    Location: String!
    Key: String!
    Bucket: String!
  }
`;