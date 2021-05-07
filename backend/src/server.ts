require("dotenv").config();
import morgan from "morgan";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import jwt from "jsonwebtoken"
import client from "./client";
const context = async ( {req} ) =>{
  const token = req.headers.authorization;
  if(!token) return { client };
  const {id} = jwt.verify(token,process.env.SECRET_KEY)
  const user = await client.users.findFirst({where:id})
  return {client,user}
}

const server = new ApolloServer({ schema, context });
const { PORT } = process.env;
if (!PORT) throw new Error(".env file is not set");


const app = express();
app.use(morgan("tiny"));
server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`✅ Running server on http://localhost:${PORT}/graphql`);
});
