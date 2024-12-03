import * as _ from "./styles";
import { useNavigate } from "react-router-dom";
import { ExitIcon, MedicIcon, PatientIcon, PharmacyIcon } from "@theme/icons";
import { useContext } from "react";
import { UserRoleContext } from "context/UserRoleContext";

interface HeaderProps {
  role: string;
  darkMode: boolean;
}

export default function Header({ role, darkMode }: HeaderProps) {
  const navigate = useNavigate();
  const userRoleContext = useContext(UserRoleContext);

  const handleExit = () => {
    userRoleContext.setUserSelectedRole("");
    navigate("/");
  };

  return (
    <_.HeaderContainer $darkMode={darkMode}>
      <_.HeaderMsgs>
        <_.WelcomeHeader>Olá!</_.WelcomeHeader>
        <_.RoleStatusMsg>
          Função atual:{" "}
          {role === "medic" && (
            <_.Role $color="red">
              Médico
              <MedicIcon />
            </_.Role>
          )}
          {role === "patient" && (
            <_.Role $color="violet">
              Paciente
              <PatientIcon />
            </_.Role>
          )}
          {role === "pharmacy" && (
            <_.Role $color="green">
              Farmacêutico
              <PharmacyIcon />
            </_.Role>
          )}
        </_.RoleStatusMsg>
      </_.HeaderMsgs>
      <_.ExitIconDiv onClick={handleExit}>
        <ExitIcon size={30} />
      </_.ExitIconDiv>
    </_.HeaderContainer>
  );
}
