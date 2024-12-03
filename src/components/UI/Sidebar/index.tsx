import * as _ from "./styles";
import { AddPrescriptionIcon, PrescriptionIcon } from "@theme/icons";
import { SidebarContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import MedchainLogo from "@assets/medchain.svg";
import MedchainLogoDark from "@assets/medchain_dark.svg";
import ToggleSwitch from "../ToggleSwitch";
import { useContext } from "react";
import { SidebarContext } from "context/SidebarContext";

interface SidebarProps {
  role: string;
  darkMode: boolean;
}

export default function Sidebar({ role, darkMode }: SidebarProps) {
  const navigate = useNavigate();
  const sidebarContext = useContext(SidebarContext);

  return (
    <SidebarContainer $darkMode={darkMode}>
      <_.LogoImg src={darkMode ? MedchainLogoDark : MedchainLogo} />
      <_.SidebarOptions>
        <_.SidebarOptionsGroup>
          <_.SidebarOptionsGroupTitle>
            Menu de Receitas
          </_.SidebarOptionsGroupTitle>
          <_.OptionDiv onClick={() => navigate("/dash/visualizar-receitas")}>
            <_.Option>
              <PrescriptionIcon />
              Visualizar
            </_.Option>
          </_.OptionDiv>
          {role === "medic" && (
            <_.OptionDiv onClick={() => navigate("/dash/adicionar-receita")}>
              <_.Option>
                <AddPrescriptionIcon />
                Criar
              </_.Option>
            </_.OptionDiv>
          )}
        </_.SidebarOptionsGroup>
        <_.SidebarOptionsGroup>
          <_.SidebarOptionsGroupTitle>
            Acessibilidade
          </_.SidebarOptionsGroupTitle>
          <_.SidebarAccessibilityDiv>
            <ToggleSwitch
              isDarkMode={sidebarContext.isDarkMode}
              toggleTheme={() => sidebarContext.toggleTheme()}
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
