import { theme } from "@theme/index";
import styled from "styled-components";
import { HeaderTextProps } from ".";

export const HeaderText = styled.h1<HeaderTextProps>`
  color: ${(props) => props.color || theme.colors.primary[10]};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
`;
