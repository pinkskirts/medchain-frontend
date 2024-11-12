import styled from "styled-components";
import { theme } from "@theme/index";

export const HeaderContainer = styled.div`
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

export const WelcomeHeader = styled.h3`
  margin: 0;
`;

export const RoleStatusMsg = styled.div`
  display: flex;
  font-weight: bold;
  color: ${theme.colors.gray[10]};
  gap: 0.2rem;
`;

export const Role = styled.p<{ $color: string }>`
  display: flex;
  color: ${(p) => p.$color};
  margin: 0;
  gap: 0.2rem;
`;

export const ExitIconDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 10%;
`;
