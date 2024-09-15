import * as _ from "./styles";
import Label from "@components/Login/Label";
import SelectUser from "@components/Login/Select";
import MedicInputs from "@components/Login/SignUpRolesForm/MedicInputs";
import PatientInputs from "@components/Login/SignUpRolesForm/PatientInputs";
import PharmacyInputs from "@components/Login/SignUpRolesForm/PharmacyInputs";
import useAuthentication from "hooks/useAuthentication";
import SignUpRolesFormContainer from "@components/Login/SignUpRolesForm";

export default function SignUpLeftSide() {
  const {
    getSelectedRole,
    selectRoleOptions,
    roleSelected,
    register,
    handleSubmit,
    handleAuthForm,
    errors,
    isSubmitting,
  } = useAuthentication();

  const renderFormByRole = () => {
    return (
      <>
        {roleSelected.includes("Selecione uma opção") ? (
          ""
        ) : (
          <SignUpRolesFormContainer
            register={register}
            isSubmitting={isSubmitting}
            errors={errors}
          >
            {renderRoleInputs()}
          </SignUpRolesFormContainer>
        )}
      </>
    );
  };

  const renderRoleInputs = () => {
    switch (roleSelected) {
      case "pharmacy":
        return (
          <PharmacyInputs
            errors={errors}
            register={register}
          />
        );
      case "medic":
        return (
          <MedicInputs
            errors={errors}
            register={register}
          />
        );
      case "patient":
        return (
          <PatientInputs
            errors={errors}
            register={register}
          />
        );
    }
  };

  return (
    <_.Container>
      <_.Content>
        <_.RegisterTopDiv>
          <_.RegisterTopDivHeader>Cadastro</_.RegisterTopDivHeader>
          <_.DoesHaveAccountDiv>
            <_.DoesHaveAccountLink to={"/"}>
              <_.PlainText>Já possui uma conta? </_.PlainText>
            </_.DoesHaveAccountLink>
          </_.DoesHaveAccountDiv>
        </_.RegisterTopDiv>

        <_.FormDiv>
          <_.RoleSelectionDiv>
            <Label>Selecione um tipo de usuário:</Label>
            <SelectUser
              options={selectRoleOptions}
              value={roleSelected}
              onChange={getSelectedRole}
            />
          </_.RoleSelectionDiv>
          <_.RoleInputsForm onSubmit={handleSubmit(handleAuthForm)}>
            {renderFormByRole()}
          </_.RoleInputsForm>
        </_.FormDiv>
      </_.Content>
    </_.Container>
  );
}
