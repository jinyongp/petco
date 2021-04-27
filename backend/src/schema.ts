import {
  loadFilesSync,
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.ts`);
export const typeDefs = mergeTypeDefs(loadedTypes);

const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.ts`);
export const resolvers = mergeResolvers(loadedResolvers);
// console.log(resolvers)
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
