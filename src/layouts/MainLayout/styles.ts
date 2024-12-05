import styled from "styled-components";
import { theme } from "@theme/index";

export const MainLayoutContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${theme.colors.gray[20]};
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: 100%;
`;

export const InnerContent = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  background-color: ${(p) => p.$darkMode && "rgba(0, 0, 0, 0.3)"};
`;

export const InnerRootContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
