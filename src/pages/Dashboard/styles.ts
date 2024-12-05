import styled from "styled-components";
import { theme } from "@theme/index";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
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
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primary[10]};
  }
`;