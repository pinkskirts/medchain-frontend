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
        ASSINANTE DA RECEITA: {prescription.signer}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        DATA DE VALIDADE: {prescription.exp_date}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>PACIENTE: {prescription.patient}</_.PrescriptionInfo>
      <_.PrescriptionInfo>
        DESCRIÇÃO: {prescription.description}
      </_.PrescriptionInfo>
      <_.PrescriptionInfo>
        MEDICAMENTO: {prescription.medication}
      </_.PrescriptionInfo>
    </_.PrescriptionPanelContainer>
  );
}
