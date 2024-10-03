import * as _ from "./styles";
import { Prescription } from "types/prescription";
import PrescriptionPanel from "../PrescriptionPanel";
import PrescriptionsCounter from "../PrescriptionsCounter";

interface PrescriptionsAreaProps {
  prescriptions: Prescription[];
  qty: number;
}

export default function PrescriptionsArea({
  prescriptions,
  qty
}: PrescriptionsAreaProps) {
  return (
    <_.PrescriptionsAreaContainer>
      <PrescriptionsCounter qty={qty}/>
      <_.PrescriptionsDiv>
        {prescriptions.map((presc) => (
          <PrescriptionPanel key={presc.id} prescription={presc} />
        ))}
      </_.PrescriptionsDiv>
    </_.PrescriptionsAreaContainer>
  );
}
