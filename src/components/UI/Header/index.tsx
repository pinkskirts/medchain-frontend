import * as _ from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { ExitIcon, MedicIcon, PatientIcon, PharmacyIcon } from "@theme/icons";

export default function Header() {
  const navigate = useNavigate();
  const { role } = useParams();

  const mockedUser = {
    name: "Gustavo Scaglione",
    email: "ra00301459@pucsp.edu.br",
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <_.HeaderContainer>
      <_.HeaderMsgs>
        <_.WelcomeHeader>Bem-vindo, {mockedUser.name}</_.WelcomeHeader>
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
              Farmácia
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
