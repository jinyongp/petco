require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TokenPayloadTypes } from "../users.types";

const resolvers: Resolvers = {
  Query: {
    signIn: async (
      _,
      { email, password },
      { client }
    ): Promise<TokenPayloadTypes> => {
      if (!email) return { ok: false, status: 401 };
      if (!password) return { ok: false, status: 402 };

      try {
        const user = await client.users.findFirst({ where: { email } });
        if (!user) return { ok: false, status: 403 };

        const status = await bcrypt.compare(password, user.password);
        if (!status) return { ok: false, status: 404 };

        const token = jwt.sign({ id: user.id, userType:"user" }, process.env.SECRET_KEY);
        return { ok: true, token };
      } catch (error) {
        console.error(error);
        return { ok: false, status: 500 };
      }
    },
  },
};

export default resolvers;
