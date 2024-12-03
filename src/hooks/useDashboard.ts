import { getPrescriptions } from "api/prescription";
import { useState } from "react";
import { Prescription } from "types/prescription";

const useDashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prescriptions, setPrescriptions] = useState<Prescription[] | null>(
    null
  );

  const loadPrescriptions = async () => {
    try {
      setIsLoading(true);
      const response = await getPrescriptions();
      setPrescriptions(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    loadPrescriptions();
  };

  return {
    handleRefresh,
    loadPrescriptions,
    prescriptions,
    isLoading,
  };
};

export default useDashboard;
