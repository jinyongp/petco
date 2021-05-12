import {appointments} from "@prisma/client";

export type AppointmentsPayLoadTypes = {
  ok: boolean
  appointments? : appointments
  status?: number
};