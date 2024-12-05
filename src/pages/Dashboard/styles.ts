import styled from "styled-components";
import { theme } from "@theme/index";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  overflow: hidden;
`;

export const RefreshButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primary[10]};
  }
`;
