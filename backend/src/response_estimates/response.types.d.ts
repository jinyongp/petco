import {response_estimate} from "@prisma/client";

export type ResponsePayLoadTypes ={
  ok: boolean
  response?: response_estimate
  status?: number
};

export type ResponseListPayLoadTypes ={
  ok: boolean
  responseList?: response_estimate[]
  status?: number
};