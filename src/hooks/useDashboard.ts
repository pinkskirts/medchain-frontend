import { getPrescriptions } from "api/prescription";
import { useState } from "react";

const useDashboard = () => {
  const [prescriptions, setPrescriptions] = useState<any>(null);

  const loadPrescriptions = async () => {
    try {
      const response = await getPrescriptions();
      setPrescriptions(response);
    } catch (error) {
      console.error("nao foi possivel resgatar as receitas");
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return {
    handleRefresh,
    loadPrescriptions,
    prescriptions,
  };
};

export default useDashboard;
