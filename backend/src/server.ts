require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({ schema });
const { PORT } = process.env;
if (!PORT) throw new Error(".env file is not set");

server.listen(PORT).then(({ url }) => console.log(`Running server on ${url}`));
