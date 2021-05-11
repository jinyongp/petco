import { pets } from "@prisma/client"

export type PetPayloadTypes = {
  ok: boolean;
  pets?: pets;
  status?: number;
}

export type PetProfilePayloadTypes = {
  ok: boolean;
  pets?: pets[];
  status?: number;
}