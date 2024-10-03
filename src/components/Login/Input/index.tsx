import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "@theme/index";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  visible?: boolean;
  register: any;
}

export const InputElement = styled.input.attrs<{
  visible?: boolean;
}>((props) => ({
  type: props.visible ? "password" : "text",
}))`
  width: 95%;
  height: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 8px;

  &::placeholder {
    color: ${theme.colors.gray[10]};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[10]};
  }
`;

const Input: React.FC<InputProps> = ({
  name,
  register,
  visible,
}) => {
  return (
    <InputElement
      {...register(name)}
      visible={visible}
    />
  );
};

export default Input;
