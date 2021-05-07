export type Resolver = (root: any, args: any, context: any, info: any) => any;

export type Resolvers = {
  Query?: {
    [key: String]: Resolver;
  };
  Mutation?: {
    [key: String]: Resolver;
  };
};
