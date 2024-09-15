import styled from "styled-components";

const LabelElement = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

interface LabelProps {
  children?: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
  return <LabelElement>{children}</LabelElement>;
}
