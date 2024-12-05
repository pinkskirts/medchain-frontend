import api from "./api";
import {
  CreatePrescriptionBodyType,
  Prescription,
  UpdatePrescriptionBodyType,
} from "types/prescription";

const defaultEndpoint = "/api/v1/prescription";

/**
 *
 * @returns
 */
export async function getPrescriptions(): Promise<Prescription[]> {
  const request = await api.get(defaultEndpoint);

  return request.data;
}

/**
 *
 * @returns
 */
export async function postPrescription(
  body: CreatePrescriptionBodyType
): Promise<number> {
  const request = await api.post(defaultEndpoint, body);

  return request.status;
}

/**
 *
 * @returns
 */
export async function putPrescription(
  body: UpdatePrescriptionBodyType
): Promise<number> {
  const request = await api.put(defaultEndpoint, body);

  return request.status;
}
