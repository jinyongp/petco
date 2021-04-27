import { PrismaClient } from "@prisma/client"
const connect = new PrismaClient();
module.exports = connect;