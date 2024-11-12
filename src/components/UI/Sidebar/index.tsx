import * as _ from "./styles";
import { AddPrescriptionIcon, PrescriptionIcon } from "@theme/icons";
import { SidebarContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import MedchainLogo from "@assets/medchain.svg";
import ToggleSwitch from "../ToggleSwitch";
import useSidebar from "hooks/useSidebar";

export default function Sidebar() {
  const navigate = useNavigate();
  const sidebarHook = useSidebar();

  // verificar o tipo de user pra nao dispor as opcoes que nao devem aparecer

  return (
    <SidebarContainer>
      <_.LogoImg src={MedchainLogo} />
      <_.SidebarOptions>
        <_.SidebarOptionsGroup>
          <_.SidebarOptionsGroupTitle>Menu</_.SidebarOptionsGroupTitle>
          <_.OptionDiv
            onClick={() => navigate("/home/medic/visualizar-receitas")}
          >
            <_.Option>
              <PrescriptionIcon />
              Visualizar Receitas
            </_.Option>
          </_.OptionDiv>
          <_.OptionDiv
            onClick={() => navigate("/home/medic/adicionar-receita")}
          >
            <_.Option>
              <AddPrescriptionIcon />
              Adicionar Receita
            </_.Option>
          </_.OptionDiv>
        </_.SidebarOptionsGroup>
        <_.SidebarOptionsGroup>
          <_.SidebarOptionsGroupTitle>
            Acessibilidade
          </_.SidebarOptionsGroupTitle>
          <_.SidebarAccessibilityDiv>
            <ToggleSwitch
              isDarkMode={sidebarHook.isDarkMode}
              toggleTheme={sidebarHook.toggleTheme}
            />
            <_.AccessibilityToggleBrightnessDescription>
              Claro/Escuro
            </_.AccessibilityToggleBrightnessDescription>
          </_.SidebarAccessibilityDiv>
        </_.SidebarOptionsGroup>
      </_.SidebarOptions>
    </SidebarContainer>
  );
}
