import * as _ from "./styles";
import Spinner from "@components/UI/Loaders/Spinner";
import useDischargePrescription from "hooks/useDischargePrescription";

interface DischargePrescriptionProps {
  address: number;
}

export default function DischargePrescription({
  address,
}: DischargePrescriptionProps) {
  const dischargePrescriptionHook = useDischargePrescription();

  return (
    <_.DischargePrescriptionContainer>
      <_.DischargeButton
        onClick={() =>
          dischargePrescriptionHook.handleDischargePrescriptionButton(address)
        }
      >
        {dischargePrescriptionHook.isLoading ? (
          <Spinner />
        ) : (
          <>Liquidar receita</>
        )}
      </_.DischargeButton>
    </_.DischargePrescriptionContainer>
  );
}
