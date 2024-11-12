import { z } from "zod";

export interface Prescription {
  address: number;
  signingDoctor: string;
  expirationDate: string;
  patient: string;
  dosageInstructions: string;
  medications: string[];
  isValid: boolean;
}

export const CreatePrescriptionFormSchema = z.object({
  expirationDate: z.string().min(1, { message: "" }).date(),
  patient: z.string().min(1, { message: "" }),
  dosageInstructions: z.string().min(1, { message: "" }),
  medications: z.string().min(1, { message: "" }),
});
export type CreatePrescriptionFormType = z.infer<
  typeof CreatePrescriptionFormSchema
>;

export const CreatePrescriptionBodySchema = z.object({
  expirationDate: z.string().date(),
  patient: z.string(),
  dosageInstructions: z.string(),
  medications: z.array(z.string()),
  isValid: z.boolean(),
});
export type CreatePrescriptionBodyType = z.infer<
  typeof CreatePrescriptionBodySchema
>;
