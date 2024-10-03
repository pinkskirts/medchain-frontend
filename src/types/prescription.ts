export interface Prescription {
  id: number;
  signer: string;
  exp_date: string;
  patient: string;
  description: string;
  medication: string;
}
