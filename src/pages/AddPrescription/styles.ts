import styled from "styled-components";
import { theme } from "@theme/index";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[20]};
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
  padding: 1rem;
`;

export const FormHeader = styled.h2``;

export const AddPrescriptionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 1rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 200px;
  padding: 1rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 1rem;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
`;

export const InputErrorDiv = styled.div`
  white-space: pre;
`;

export const InputError = styled.p`
  color: red;
  font-size: 13px;
  margin: 5px 0 0 0;
`;
