import { useRef, useState } from "react";

async function createPrescription(CRM, patientName, medicineName) {
  const integerCRM = parseInt(CRM);

  const response = await fetch("api/prescription", {
    method: "POST",
    body: JSON.stringify({
      integerCRM,
      patientName,
      medicineName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create the prescription!");
  }

  return data;
}

async function deletePrescription(prescriptionID) {
  const response = await fetch("api/prescription", {
    method: "DELETE",
    body: JSON.stringify({
      prescriptionID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete the prescription!");
  }

  return data;
}

function WritePrescriptionsForms() {
  const createFormRef = useRef();

  // useState variables
  const [errorCreateForm, setErrorCreateForm] = useState("");
  const [errorDeleteForm, setErrorDeleteForm] = useState("");
  const [CRM, setCRM] = useState("");
  const [patientName, setPatientName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (event.target === createFormRef.current) {
        // CREATE/POST
        await createPrescription(CRM, patientName, medicineName);
        alert("Prescription created successfully!");
      } else {
        // DELETE
        await deletePrescription(prescriptionID);
        alert("Prescription deleted successfully!");
      }
      const form = event.target;
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <h1>Create Prescription</h1>
    </div>
  );
}

export default WritePrescriptionsForms;
