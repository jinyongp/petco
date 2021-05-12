import { estimates } from "@prisma/client";

export type EstimatesPayLoadTypes = {
  ok: boolean
  estimates?: estimates
  status?: number
}

export type EstimatesListPayLoadTypes = {
  ok: boolean
  estimatesList?: estimates[]
  status?: number
}