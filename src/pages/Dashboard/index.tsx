import * as _ from "./styles";
import { useParams } from "react-router-dom";
import PrescriptionsArea from "@components/Dashboard/PrescriptionsArea";
import useDashboard from "hooks/useDashboard";
import MedchainLogo from "@assets/medchain.svg";
import {
  ExitIcon,
  MedicIcon,
  PatientIcon,
  PharmacyIcon,
  PrescriptionIcon,
} from "@theme/icons";
import ToggleSwitch from "@components/UI/ToggleSwitch";

export default function Dashboard() {
  const { role } = useParams();

  const {
    mockedPrescriptions,
    mockedUser,
    handleExit,
    isDarkMode,
    toggleTheme,
    prescriptionsQuantity,
  } = useDashboard();

  return (
    <_.DashboardContainer>
      <_.Sidebar>
        <_.LogoImg src={MedchainLogo} />
        <_.SidebarOptions>
          <_.SidebarOptionsGroup>
            <_.SidebarOptionsGroupTitle>Menu</_.SidebarOptionsGroupTitle>
            <_.OptionDiv>
              <_.Option>
                <PrescriptionIcon />
                Receitas
              </_.Option>
            </_.OptionDiv>
          </_.SidebarOptionsGroup>
          <_.SidebarOptionsGroup>
            <_.SidebarOptionsGroupTitle>
              Acessibilidade
            </_.SidebarOptionsGroupTitle>
            <_.SidebarAccessibilityDiv>
              <ToggleSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <_.AccessibilityToggleBrightnessDescription>
                Claro/Escuro
              </_.AccessibilityToggleBrightnessDescription>
            </_.SidebarAccessibilityDiv>
          </_.SidebarOptionsGroup>
        </_.SidebarOptions>
      </_.Sidebar>

      <_.Content>
        <_.Header>
          <_.HeaderMsgs>
            <_.WelcomeHeader>Bem-vindo, {mockedUser.name}</_.WelcomeHeader>
            <_.RoleStatusMsg>
              Função atual:{" "}
              {role === "medic" && (
                <_.Role color="red">
                  Médico
                  <MedicIcon />
                </_.Role>
              )}
              {role === "patient" && (
                <_.Role color="violet">
                  Paciente
                  <PatientIcon />
                </_.Role>
              )}
              {role === "pharmacy" && (
                <_.Role color="green">
                  Farmácia
                  <PharmacyIcon />
                </_.Role>
              )}
            </_.RoleStatusMsg>
          </_.HeaderMsgs>
          <_.ExitIconDiv onClick={handleExit}>
            <ExitIcon size={30} />
          </_.ExitIconDiv>
        </_.Header>

        <_.InnerContent>
          <PrescriptionsArea
            qty={prescriptionsQuantity}
            prescriptions={mockedPrescriptions}
          />
        </_.InnerContent>
      </_.Content>
    </_.DashboardContainer>
  );
}
