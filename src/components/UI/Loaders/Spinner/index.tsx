import { theme } from "@theme/index";
import styled from "styled-components";

const SpinnerElement = styled.div`
  height: 20px;
  width: 20px;
  border: 5px solid ${theme.colors.white[10]};
  border-radius: 50%;
  border-right-color: ${theme.colors.blue[20]};
  animation: spin 1s ease infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return <SpinnerElement />;
}
