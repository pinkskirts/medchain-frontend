import { FieldErrors } from "react-hook-form";
import Input from "@components/Login/Input";
import InputError from "@components/Login/InputError";
import Label from "@components/Login/Label";
import styled from "styled-components";

const Container = styled.div``

interface PharmacyInputsProps {
  register: any;
  errors: FieldErrors;
}

export default function PharmacyInputs({
  register,
  errors,
}: PharmacyInputsProps) {
  return (
    <Container>
      <Label>CNPJ</Label>
      <Input
        name="cnpj"
        register={register}
        placeholder="Insira o CNPJ"
        autoComplete="cnpj"
      />
      <InputError errors={errors} fieldName="cnpj" />
      <Label>Número de Autorização</Label>
      <Input
        name="authorization_number"
        register={register}
        placeholder="Insira o número da autorização da ANVISA"
        autoComplete="authorization_number"
      />
      <InputError errors={errors} fieldName="authorization_number" />
      <Label>NUVS</Label>
      <Input
        name="nuvs"
        register={register}
        placeholder="Insira o Número Único de Vigilância Sanitária"
        autoComplete="nuvs"
      />
      <InputError errors={errors} fieldName="nuvs" />
    </Container>
  );
}
