import { PrismaClient, users, vets } from "@prisma/client";

export type Context = {
  client: PrismaClient;
  currentVets?: vets;
  currentUser?: users;
};

export type Resolver = (
  root: any,
  args: any,
  context: Context,
  info: any
) => any;

export type Resolvers = {
  Query?: {
    [key: string]: Resolver;
  };
  Mutation?: {
    [key: string]: Resolver;
  };
};
