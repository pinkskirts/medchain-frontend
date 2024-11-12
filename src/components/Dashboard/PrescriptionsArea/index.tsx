import * as _ from "./styles";
import { Prescription } from "types/prescription";
import PrescriptionPanel from "../PrescriptionPanel";

interface PrescriptionsAreaProps {
  prescriptions: Prescription[];
}

export default function PrescriptionsArea({
  prescriptions,
}: PrescriptionsAreaProps) {
  return (
    <_.PrescriptionsAreaContainer>
      <_.PrescriptionsDiv>
        {prescriptions &&
          prescriptions.map((presc, index) => (
            <PrescriptionPanel key={index} prescription={presc} />
          ))}
      </_.PrescriptionsDiv>
    </_.PrescriptionsAreaContainer>
  );
}
