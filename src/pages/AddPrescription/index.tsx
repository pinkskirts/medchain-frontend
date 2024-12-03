import * as _ from "./styles";
import Label from "@components/Login/Label";
import Spinner from "@components/UI/Loaders/Spinner";
import useAddPrescription from "hooks/useAddPrescription";

export default function AddPrescription() {
  const addPrescriptionHook = useAddPrescription();

  return (
    <_.Container>
      <_.FormHeader>
        Insira as informações abaixo para criar a receita
      </_.FormHeader>
      <_.AddPrescriptionForm
        onSubmit={addPrescriptionHook.handleSubmit(
          addPrescriptionHook.handleCreatePrescriptionForm
        )}
      >
        <_.InputDiv>
          <Label>Data de validade</Label>
          <_.Input
            type="date"
            {...addPrescriptionHook.register("expirationDate")}
            autoComplete="expirationDate"
            value={addPrescriptionHook.expirationDateInput}
            onChange={(e) =>
              addPrescriptionHook.setExpirationDateInput(e.target.value)
            }
          />
        </_.InputDiv>
        <_.InputDiv>
          <Label>Nome do paciente</Label>
          <_.Input
            {...addPrescriptionHook.register("patient")}
            placeholder="Inserir nome de paciente"
            autoComplete="patient"
            value={addPrescriptionHook.patientInput}
            onChange={(e) =>
              addPrescriptionHook.setPatientInput(e.target.value)
            }
          />
        </_.InputDiv>
        <_.InputDiv>
          <Label>Posologia</Label>
          <_.TextArea
            {...addPrescriptionHook.register("dosageInstructions")}
            placeholder="Insira a posologia da receita"
            autoComplete="dosageInstructions"
            value={addPrescriptionHook.dosageInstructionsInput}
            onChange={(e) =>
              addPrescriptionHook.setDosageInstructionsInput(e.target.value)
            }
          />
        </_.InputDiv>
        <_.InputDiv>
          <Label>Medicamentos</Label>
          <_.Input
            {...addPrescriptionHook.register("medications")}
            placeholder="Inserir medicamentos"
            autoComplete="medications"
            value={addPrescriptionHook.medicationsInput}
            onChange={(e) =>
              addPrescriptionHook.setMedicationsInput(e.target.value)
            }
          />
        </_.InputDiv>
        <_.SubmitButton>
          {addPrescriptionHook.isSubmitting ? <Spinner /> : <>Criar receita</>}
        </_.SubmitButton>
      </_.AddPrescriptionForm>
    </_.Container>
  );
}
