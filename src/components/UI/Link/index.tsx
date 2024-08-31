import { LinkProps } from "react-router-dom";
import { BaseLink } from "./styles";

interface CustomLinkProps extends LinkProps {
    to: string;
    children: React.ReactNode;
  }

export default function Link({ to, children, ...rest }: CustomLinkProps) {
    return <BaseLink to={to} {...rest}>{children}</BaseLink>;
}