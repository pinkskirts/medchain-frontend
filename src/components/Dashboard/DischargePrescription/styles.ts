import { theme } from "@theme/index";
import styled from "styled-components";

export const DischargePrescriptionContainer = styled.div``;

export const DischargeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-size: 18px;
  background-color: ${theme.colors.primary[10]};
  color: black;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primary[20]};
    color: white;
  }
`;
