import styled from "styled-components";
import { theme } from "@theme/index";

export const MainLayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[20]};
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InnerContent = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
  padding: 1rem;
  background-color: ${(p) => p.$darkMode && "rgba(0, 0, 0, 0.3)"};
`;
