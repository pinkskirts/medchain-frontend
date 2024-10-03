import styled from "styled-components";
import { theme } from "@theme/index";

export const DashboardContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[20]};
  display: flex;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  background-color: ${theme.colors.white[10]};
  border-right: 2px solid ${theme.colors.red[10]};
`;

export const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0;
  gap: 1rem;
`;

export const SidebarOptionsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarOptionsGroupTitle = styled.h4`
  margin: 0;
`;

export const OptionDiv = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${theme.colors.red[10]};
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
`;

export const SidebarAccessibilityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AccessibilityToggleBrightnessDescription = styled.p``;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  background-color: ${theme.colors.white[10]};
`;

export const HeaderMsgs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  width: 90%;
`;

export const ExitIconDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
`;

export const WelcomeHeader = styled.h3`
  margin: 0;
`;

export const RoleStatusMsg = styled.div`
  display: flex;
  font-weight: bold;
  color: ${theme.colors.gray[10]};
  gap: 0.2rem;
`;

interface RoleProp {
  color: string;
}

export const Role = styled.p<RoleProp>`
  display: flex;
  color: ${(p) => p.color};
  margin: 0;
  gap: 0.2rem;
`;

export const LogoImg = styled.img`
  width: 80%;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
`;

export const PrescriptionsAreaContainer = styled.div`
  display: flex;
  gap: 2rem;
`;