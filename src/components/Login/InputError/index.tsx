import { theme } from "@theme/index";
import { FieldErrors } from "react-hook-form";
import styled from "styled-components";

const InputErrorDiv = styled.div`
  white-space: pre;
  height: 25px;
  display: flex;
  align-items: center;
`;

export const WarningMsg = styled.p`
  color: ${theme.colors.red[10]};
  font-weight: bold;
`;

interface InputErrorProps {
  errors: FieldErrors;
  fieldName: string;
}

export default function InputError({ errors, fieldName }: InputErrorProps) {
  const errorMessage = errors[fieldName]?.message;

  return (
    <InputErrorDiv>
      {errorMessage && typeof errorMessage === "string" ? (
        <WarningMsg>{errorMessage}</WarningMsg>
      ) : (
        " "
      )}
    </InputErrorDiv>
  );
}
