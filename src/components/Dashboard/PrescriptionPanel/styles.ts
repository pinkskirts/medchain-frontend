import styled from "styled-components";
import { theme } from "@theme/index";

export const PrescriptionPanelContainer = styled.div`
  background-color: ${theme.colors.white[10]};
  padding: 1rem;
  border: 2px solid ${theme.colors.black[10]};
  border-radius: 5px;
`;

export const PrescriptionInfo = styled.p`
  font-weight: bold;
`;
