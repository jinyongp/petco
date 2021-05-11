import {vets} from "@prisma/client"

export type VetsPayLoadTypes = {
  ok : boolean
  vets?: vets
  status?: number
}

export type TokenPayloadTypes = VetsPayLoadTypes & {
  token?: string;
};

