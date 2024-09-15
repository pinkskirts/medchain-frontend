import { FieldErrors } from "react-hook-form";
import Input from "@components/Login/Input";
import InputError from "@components/Login/InputError";
import Label from "@components/Login/Label";
import styled from "styled-components";

const Container = styled.div``

interface MedicInputsProps {
  register: any;
  errors: FieldErrors;
}

export default function MedicInputs({
  register,
  errors,
}: MedicInputsProps) {
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
      <Label>CRM</Label>
      <Input
        name="crm"
        register={register}
        placeholder="Insira o seu registro do Conselho Regional de Medicina"
        autoComplete="crm"
      />
      <InputError errors={errors} fieldName="crm" />
    </Container>
  );
}
