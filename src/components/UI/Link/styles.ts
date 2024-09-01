import { theme } from "@theme/index";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.blue[20]};
  font-weight: bold;
`;
