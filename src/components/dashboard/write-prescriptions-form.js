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
        <form onSubmit={handleSubmit} ref={createFormRef}>
          <div>
            <input
              type="text"
              maxLength="6"
              placeholder="CRM"
              onChange={(e) => setCRM(e.target.value)}
              required
            ></input>
            ex.: 123355 <br />
            <input
              type="text"
              placeholder="Patient's name"
              onChange={(e) => setPatientName(e.target.value)}
              required
            ></input>
            <br />
            <input
              type="text"
              placeholder="Medicine name"
              onChange={(e) => setMedicineName(e.target.value)}
              required
            ></input>
            ex.: Clonazepam (o famoso Rivotril)
          </div>
          {errorCreateForm && <div>{errorCreateForm}</div>}
          <button>Submit</button>
        </form>
      </section>
      <section>
        <h1>Delete Prescription</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Prescription ID"
              onChange={(e) => setPrescriptionID(e.target.value)}
              required
            ></input>
            <br />
          </div>
          {errorDeleteForm && <div>{errorDeleteForm}</div>}
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default WritePrescriptionsForms;
