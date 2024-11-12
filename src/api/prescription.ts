import api from "./api";
import { CreatePrescriptionBodyType } from "types/prescription";

/**
 *
 * @returns
 */
export async function getPrescriptions(): Promise<any> {
  const request = await api.get("/api/v1/");

  return request.data;
}

/**
 *
 * @returns
 */
export async function postPrescription(
  body: CreatePrescriptionBodyType
): Promise<any> {
  const request = await api.post("/api/v1/", body);

  return request.status;
}
