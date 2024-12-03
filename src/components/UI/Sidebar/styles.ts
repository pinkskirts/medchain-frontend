import styled from "styled-components";
import { theme } from "@theme/index";

export const SidebarContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 18%;
  background-color: ${(p) =>
    p.$darkMode ? "rgba(0, 0, 0, 0.5)" : theme.colors.white[10]};
  border-right: 2px solid ${theme.colors.red[10]};
`;

export const LogoImg = styled.img`
  width: 80%;
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
  gap: 0.5rem;
`;

export const SidebarOptionsGroupTitle = styled.h4`
  margin: 0;
`;

export const OptionDiv = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${theme.colors.red[10]};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primary[10]};
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  font-weight: bold;
`;

export const SidebarAccessibilityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AccessibilityToggleBrightnessDescription = styled.p``;
