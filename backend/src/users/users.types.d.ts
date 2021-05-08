import { users } from "@prisma/client";

export type UserPayloadTypes = {
  ok: boolean;
  user?: users;
  status?: number;
};

export type TokenPayloadTypes = UserPayloadTypes & {
  token?: string;
};
