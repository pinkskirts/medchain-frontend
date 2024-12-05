import * as _ from "./styles";
import Spinner from "@components/UI/Loaders/Spinner";
import useDischargePrescription from "hooks/useDischargePrescription";

interface DischargePrescriptionProps {
  address: string;
  isValid: boolean;
  handleRefresh: () => void;
}

export default function DischargePrescription({
  address,
  isValid,
  handleRefresh,
}: DischargePrescriptionProps) {
  const dischargePrescriptionHook = useDischargePrescription();

  return (
    <_.DischargePrescriptionContainer>
      <_.DischargeButton
        onClick={() =>
          dischargePrescriptionHook.handleDischargePrescriptionButton(
            address,
            isValid,
            handleRefresh
          )
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
