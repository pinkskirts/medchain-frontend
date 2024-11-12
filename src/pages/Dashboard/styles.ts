import styled from "styled-components";
import { theme } from "@theme/index";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[20]};
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
  padding: 1rem;
`;

export const RefreshButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem;
  font-weight: bold;
  font-size: 23px;
  border-radius: 5px;
`;
