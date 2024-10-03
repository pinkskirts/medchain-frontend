import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prescription } from "types/prescription";

const useDashboard = () => {
  const mockedUser = {
    name: "Gustavo Scaglione",
    email: "ra00301459@pucsp.edu.br",
  };

  const mockedPrescriptions: Prescription[] = [
    {
      id: 1,
      signer: "Dr. Laura Medeiros",
      exp_date: "12/05/2025",
      patient: "Marcos Oliveira",
      description: "Tratamento para hipertensão",
      medication: "Losartana 50mg",
    },
    {
      id: 2,
      signer: "Dr. Rafael Almeida",
      exp_date: "30/11/2024",
      patient: "Carla Silva",
      description: "Antibiótico para infecção urinária",
      medication: "Ciprofloxacina 500mg",
    },
    {
      id: 3,
      signer: "Dra. Fernanda Souza",
      exp_date: "15/09/2024",
      patient: "Lucas Santos",
      description: "Controle de glicemia",
      medication: "Metformina 850mg",
    },
    {
      id: 4,
      signer: "Dr. João Ribeiro",
      exp_date: "08/03/2025",
      patient: "Ana Clara Martins",
      description: "Tratamento para enxaqueca",
      medication: "Amitriptilina 25mg",
    },
  ];

  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [prescriptionsQuantity, setPrescriptionsQuantity] = useState<number>(
    mockedPrescriptions.length
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleAddPrescription = (qty: number): void => {
    // Add more stuff here
    setPrescriptionsQuantity(qty);
  };

  return {
    mockedPrescriptions,
    mockedUser,
    handleExit,
    isDarkMode,
    toggleTheme,
    prescriptionsQuantity,
    handleAddPrescription,
  };
};

export default useDashboard;
