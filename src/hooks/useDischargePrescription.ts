import { defineToastify } from "@components/ToastifyMessage/helpers";
import { putPrescription } from "api/prescription";
import { useState } from "react";

const useDischargePrescription = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDischargePrescriptionButton = async (address: number) => {
    try {
      setIsLoading(true);
      await putPrescription({ address: address });
      defineToastify("success", "Receita liquidada com sucesso.");
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
