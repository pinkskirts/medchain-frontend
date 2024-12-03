import * as _ from "./styles";
import { Prescription } from "types/prescription";

interface PrescriptionsPanelProps {
  prescription: Prescription;
  children: React.ReactNode;
}

export default function PrescriptionPanel({
  prescription,
  children,
}: PrescriptionsPanelProps) {
  return (
    <_.PrescriptionPanelContainer>
      <_.PrescriptionTitle>Receita</_.PrescriptionTitle>
      <_.PrescriptionInfo>
        DATA DE VALIDADE: {prescription.expirationDate}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        NOME DO PACIENTE: {prescription.patient}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        POSOLOGIA: {prescription.dosageInstructions}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        MEDICAMENTOS: {prescription.medications.join(", ")}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        RECEITA VÁLIDA: {prescription.isValid ? "Sim" : "Não"}
      </_.PrescriptionInfo>
      {children}
    </_.PrescriptionPanelContainer>
  );
}
