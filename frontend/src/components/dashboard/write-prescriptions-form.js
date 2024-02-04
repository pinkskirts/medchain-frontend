import { useRef, useState } from "react";
function WritePrescriptionsForms() {
  const createFormRef = useRef();

  // useState variables
  const [errorCreateForm, setErrorCreateForm] = useState("");
  const [errorDeleteForm, setErrorDeleteForm] = useState("");
  const [CRM, setCRM] = useState("");
  const [patientName, setPatientName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");
  return (
    <div>
      <section>
        <h1>Create Prescription</h1>
    </div>
  );
}

export default WritePrescriptionsForms;
