import styled from "styled-components";
import Input from "../Input";
import Spinner from "@components/UI/Loaders/Spinner";
import Label from "../Label";
import InputError from "../InputError";
import { FieldErrors } from "react-hook-form";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  padding: 2%;
  font-weight: bold;
  margin-top: 1rem;
`;

interface SignUpRolesFormContainerProps {
  children: React.ReactNode;
  register: any;
  isSubmitting: boolean;
  errors: FieldErrors;
}

export default function SignUpRolesFormContainer({
  children,
  register,
  isSubmitting,
  errors,
}: SignUpRolesFormContainerProps) {
  return (
    <Container>
      <Label>Email</Label>
      <Input
        name="email"
        register={register}
        placeholder="Insira o seu email para login"
        autoComplete="email"
      />
      <InputError errors={errors} fieldName="email" />

      <Label>Senha</Label>
      <Input
        name="password"
        register={register}
        placeholder="Insira uma senha"
        autoComplete="password"
      />
      <InputError errors={errors} fieldName="password" />
      {children}
      <RegisterButton disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : "Cadastrar"}
      </RegisterButton>
    </Container>
  );
}
