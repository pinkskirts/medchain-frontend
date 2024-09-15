import styled from "styled-components";
import { theme } from "@theme/index";

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 22px;
  width: 70%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const SelectUser = styled.select`
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary[10]};
  appearance: none;
  background-color: ${theme.colors.white[10]};
  color: ${theme.colors.black[10]};
  font-size: 16px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const ArrowDiv = styled.div`
  color: black;
  position: absolute;
  top: 35%;
  right: 12%;
  pointer-events: none;

  width: 0;
  height: 0;
`