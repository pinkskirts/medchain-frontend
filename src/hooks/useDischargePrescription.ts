import { useState } from "react";
import { defineToastify } from "@components/ToastifyMessage/helpers";
import { putPrescription } from "api/prescription";

const useDischargePrescription = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDischargePrescriptionButton = async (
    address: string,
    isValid: boolean,
    handleRefresh: () => void
  ) => {
    try {
      setIsLoading(true);

      if (!isValid) {
        defineToastify("warning", "Receita atualmente inválida!");
        return;
      }

      await putPrescription({ prescriptionAddress: address, isValid: false });
      defineToastify("success", "Receita liquidada com sucesso.");
      handleRefresh();
    } catch (error) {
      console.error(error);
      defineToastify("error", "Operação de liquidar receita falhou.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDischargePrescriptionButton, isLoading };
};

export default useDischargePrescription;
