import styled from "styled-components";
import { theme } from "@theme/index";

export const PrescriptionPanelContainer = styled.div`
  background-color: ${theme.colors.white[10]};
  padding: 1rem;
  border: 2px solid ${theme.colors.black[10]};
  border-radius: 5px;
`;

export const PrescriptionTitle = styled.h2`
  margin: 0;
  justify-self: center;
`;

export const PrescriptionInfo = styled.p``;
