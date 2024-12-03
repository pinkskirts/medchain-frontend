import * as _ from "./styles";
import { Prescription } from "types/prescription";
import PrescriptionPanel from "../PrescriptionPanel";
import DischargePrescription from "../DischargePrescription";

interface PrescriptionsAreaProps {
  prescriptions: Prescription[];
  userRole: string;
}

export default function PrescriptionsArea({
  prescriptions,
  userRole,
}: PrescriptionsAreaProps) {
  return (
    <_.PrescriptionsAreaContainer>
      <_.PrescriptionsDiv>
        {prescriptions &&
          prescriptions.map((presc, index) => (
            <PrescriptionPanel key={index} prescription={presc}>
              {userRole === "pharmacy" && (
                <DischargePrescription address={presc.address} />
              )}
            </PrescriptionPanel>
          ))}
      </_.PrescriptionsDiv>
    </_.PrescriptionsAreaContainer>
  );
}
