import * as _ from "./styles";
import Label from "@components/Login/Label";
import SelectUser from "@components/Login/Select";
import MedicInputs from "@components/Login/SignUpRolesForm/MedicInputs";
import PatientInputs from "@components/Login/SignUpRolesForm/PatientInputs";
import PharmacyInputs from "@components/Login/SignUpRolesForm/PharmacyInputs";
import useAuthentication from "hooks/useAuthentication";
import SignUpRolesFormContainer from "@components/Login/SignUpRolesForm";

export default function SignUpLeftSide() {
  const authenticationHook = useAuthentication({
    setUserSelectedRole: undefined,
  });

  const renderFormByRole = () => {
    return (
      <>
        {authenticationHook.roleSelected.includes("Selecione uma opção") ? (
          ""
        ) : (
          <SignUpRolesFormContainer
            register={authenticationHook.register}
            isSubmitting={authenticationHook.isSubmitting}
            errors={authenticationHook.errors}
          >
            {renderRoleInputs()}
          </SignUpRolesFormContainer>
        )}
      </>
    );
  };

  const renderRoleInputs = () => {
    switch (authenticationHook.roleSelected) {
      case "pharmacy":
        return (
          <PharmacyInputs
            errors={authenticationHook.errors}
            register={authenticationHook.register}
          />
        );
      case "medic":
        return (
          <MedicInputs
            errors={authenticationHook.errors}
            register={authenticationHook.register}
          />
        );
      case "patient":
        return (
          <PatientInputs
            errors={authenticationHook.errors}
            register={authenticationHook.register}
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
              options={authenticationHook.selectRoleOptions}
              value={authenticationHook.roleSelected}
              onChange={authenticationHook.getSelectedRole}
            />
          </_.RoleSelectionDiv>
          <_.RoleInputsForm
            onSubmit={authenticationHook.handleSubmit(
              authenticationHook.handleAuthForm
            )}
          >
            {renderFormByRole()}
          </_.RoleInputsForm>
        </_.FormDiv>
      </_.Content>
    </_.Container>
  );
}
