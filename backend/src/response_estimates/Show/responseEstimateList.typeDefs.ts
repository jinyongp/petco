import {gql} from "apollo-server";

export default gql`
  type Query{
    vetResponseEstimateList:ResponseListPayLoad
    responseEstimateList(estimate_id:Int):ResponseListPayLoad
  }
`;