import styled from "styled-components";
import { LinkProps } from "react-router-dom";
import { theme } from "@theme/index";
import { Link } from "react-router-dom";

const BaseLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.blue[20]};
  font-weight: bold;
  display: inline-block;
`;

interface CustomLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function CustomLink({ to, children, ...rest }: CustomLinkProps) {
  return (
    <BaseLink to={to} {...rest}>
      {children}
    </BaseLink>
  );
}
