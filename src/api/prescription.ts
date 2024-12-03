import api from "./api";
import {
  CreatePrescriptionBodyType,
  Prescription,
  UpdatePrescriptionBodyType,
} from "types/prescription";

/**
 *
 * @returns
 */
export async function getPrescriptions(): Promise<Prescription[]> {
  const request = await api.get("/api/v1/");

  return request.data;
}

/**
 *
 * @returns
 */
export async function postPrescription(
  body: CreatePrescriptionBodyType
): Promise<number> {
  const request = await api.post("/api/v1/", body);

  return request.status;
}

/**
 *
 * @returns
 */
export async function putPrescription(
  body: UpdatePrescriptionBodyType
): Promise<number> {
  const request = await api.put("/api/v1/", body);

  return request.status;
}
