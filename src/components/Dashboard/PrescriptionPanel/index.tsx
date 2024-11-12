import * as _ from "./styles";
import { Prescription } from "types/prescription";

interface PrescriptionsPanelProps {
  prescription: Prescription;
}

export default function PrescriptionPanel({
  prescription,
}: PrescriptionsPanelProps) {
  return (
    <_.PrescriptionPanelContainer>
      Receita
      <_.PrescriptionInfo>
        DATA DE VALIDADE: {prescription.expirationDate}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>PACIENTE: {prescription.patient}</_.PrescriptionInfo>
      <_.PrescriptionInfo>
        POSOLOGIA: {prescription.dosageInstructions}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        MEDICAMENTOS: {prescription.medications.join(", ")}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        RECEITA VALIDA: {prescription.isValid ? "Sim" : "Não"}
      </_.PrescriptionInfo>
    </_.PrescriptionPanelContainer>
  );
}
