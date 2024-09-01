import { theme } from "@theme/index";
import styled from "styled-components";

export const Container = styled.div``;

export const Spinner = styled.div`
  height: 35px;
  width: 35px;
  border: 5px solid ${theme.colors.white[10]};
  border-radius: 50%;
  border-right-color: ${theme.colors.primary[10]};
  animation: spin 1s ease infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
