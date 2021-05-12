import {appointments} from "@prisma/client";

export type AppointmentsPayLoadTypes = {
  ok: boolean
  appointments? : appointments
  status?: number
};

export type AppointmentsListPayLoadTypes ={
  ok: boolean
  appointmentsList?: appointments[]
  status?: number
}