import styled from "styled-components";
import { theme } from "@theme/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormHeader = styled.h2``;

export const AddPrescriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 1rem;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  padding: 1rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  height: 60px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primary[20]};
    color: white;
  }
`;

export const InputErrorDiv = styled.div`
  white-space: pre;
`;

export const InputError = styled.p`
  color: red;
  font-size: 13px;
  margin: 5px 0 0 0;
`;
