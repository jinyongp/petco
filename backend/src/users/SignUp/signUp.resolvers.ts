require("dotenv").config();
import { Resolvers } from "../../types";
import bcrypt from "bcrypt";
import { UserPayloadTypes } from "../users.types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

const resolvers: Resolvers = {
  Mutation: {
    async signUp(_, data, { client }): Promise<UserPayloadTypes> {
      const { password, email, username, phone_number } = data;

      //모든값 입력되었는지 검사
      if (!email) return { ok: false, status: 404 };
      if (!password) return { ok: false, status: 404 };
      if (!username) return { ok: false, status: 404 };
      if (!phone_number) return { ok: false, status: 404 };

      try {
        data.password = await bcrypt.hash(password, 10);
        const user = await client.users.create({ data });
        return user ? { ok: true, user } : { ok: false, status: 404 };
      } catch (error) {
        /**
         * TODO 나머지 Unique 판별 테스트 수행
         * @see https://www.prisma.io/docs/reference/api-reference/error-reference
         */
        if (error instanceof PrismaClientKnownRequestError) {
          const { target } = error.meta as { target: string };
          if (target === "phone_number_unique") {
            return { ok: false, status: 407 }; // Already phone_number exist
          } else {
            return { ok: false, status: 403 };
          }
        } else {
          return { ok: false, status: 500 };
        }
      }
    },
  },
};

export default resolvers;
