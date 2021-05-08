require("dotenv").config();
import morgan from "morgan";
import express from "express";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import schema from "./schema";
import jwt from "jsonwebtoken";
import client from "./client";

const context = async ({ req }: ExpressContext) => {
  const token = req.headers.authorization;
  if (!token) return { client };

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (typeof decodedToken === "string") return { client };
    const currentUser = await client.users.findFirst({
      where: { id: decodedToken["id"] },
    });
    return { client, currentUser };
  } catch (error) {
    console.error(error);
    return { client };
  }
};

const server = new ApolloServer({ schema, context });
const { PORT } = process.env;
if (!PORT) throw new Error(".env file is not set");

const app = express();
app.use(morgan("tiny"));
server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`✅ Running server on http://localhost:${PORT}/graphql`);
});
