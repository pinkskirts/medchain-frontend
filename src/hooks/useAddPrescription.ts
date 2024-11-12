import * as prescription_types from "types/prescription";
import { defineToastify } from "@components/ToastifyMessage/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddPrescriptionFormMessages } from "utils/add-prescription-messages";
import { postPrescription } from "api/prescription";

const useAddPrescription = () => {
  const [expirationDateInput, setExpirationDateInput] = useState<string>("");
  const [patientInput, setPatientInput] = useState<string>("");
  const [dosageInstructionsInput, setDosageInstructionsInput] =
    useState<string>("");
  const [medicationsInput, setMedicationsInput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<prescription_types.CreatePrescriptionFormType>({
    mode: "onSubmit",
    resolver: zodResolver(prescription_types.CreatePrescriptionFormSchema),
  });

  const handleCreatePrescriptionForm: SubmitHandler<
    prescription_types.CreatePrescriptionFormType
  > = async (data) => {
    try {
      console.log(data)
      await postPrescription({
        expirationDate: data.expirationDate,
        patient: data.patient,
        dosageInstructions: data.dosageInstructions,
        medications: data.medications.split(" "),
        isValid: true,
      });
      clearInputs();
      defineToastify(
        "success",
        AddPrescriptionFormMessages["ADD-PRESCRIPTION-SUCCESS"]
      );
    } catch (error) {
      defineToastify(
        "error",
        AddPrescriptionFormMessages["ADD-PRESCRIPTION-ERROR"]
      );
    }
  };

  const clearInputs = () => {
    setExpirationDateInput("");
    setPatientInput("");
    setDosageInstructionsInput("");
    setMedicationsInput("");
  };

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit,
    handleCreatePrescriptionForm,
    expirationDateInput,
    setExpirationDateInput,
    patientInput,
    setPatientInput,
    dosageInstructionsInput,
    setDosageInstructionsInput,
    medicationsInput,
    setMedicationsInput,
  };
};

export default useAddPrescription;
