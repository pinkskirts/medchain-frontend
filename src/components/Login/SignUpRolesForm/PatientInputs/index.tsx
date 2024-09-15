import { FieldErrors } from "react-hook-form";
import Input from "@components/Login/Input";
import InputError from "@components/Login/InputError";
import Label from "@components/Login/Label";
import styled from "styled-components";

const Container = styled.div``

interface PatientInputsProps {
  register: any;
  errors: FieldErrors;
}

export default function PatientInputs({
  register,
  errors,
}: PatientInputsProps) {
  return (
    <Container>
      <Label>Nome completo</Label>
      <Input
        name="name"
        register={register}
        placeholder="Insira o seu nome completo"
        autoComplete="name"
      />
      <InputError errors={errors} fieldName="name" />
      <Label>CPF</Label>
      <Input
        name="cpf"
        register={register}
        placeholder="Insira o seu CPF"
        autoComplete="cpf"
      />
      <InputError errors={errors} fieldName="cpf" />
    </Container>
  );
}
