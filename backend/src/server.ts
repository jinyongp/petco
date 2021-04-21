require("dotenv").config();
import morgan from "morgan";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const server = new ApolloServer({ schema });
const { PORT } = process.env;
if (!PORT) throw new Error(".env file is not set");

const app = express();
app.use(morgan("tiny"));
server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`✅ Running server on http://localhost:${PORT}/graphql`);
});
