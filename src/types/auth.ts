import { z } from "zod";

/**
 * Tipo de path baseado na tela atual do fluxo da aplicação (Login e Cadastro)
 */
export enum AuthFormTypeEnum {
  SignIn = "",
  SignUp = "sign-up",
}

export type AuthFormDataType = SignInPayload | SignUpPayload;

/**
 * Esquema de validação de inputs da tela de SignIn (Login)
 */
const SignInSchema = z.object({
  email: z.string().email({
    message: "Formato de e-mail inválido.",
  }),
  password: z.string().min(1, { message: "Campo de senha vazio." }),
});

/**
 * Tipo de payload de Login para manipulação de dados via useForm e request assíncrono
 */
export type SignInPayload = z.infer<typeof SignInSchema>;

/**
 * Esquema de validação de inputs da tela de SignUp (Cadastro)
 */
const SignUpSchema = z.object({
  email: z.string().email({
    message: "Insira um e-mail válido.",
  }),
  password: z.string().min(8, { message: "Tamanho mínimo: 8 caracteres." }),
  cnpj: z
    .string()
    .min(14, { message: "Tamanho mínimo: 14 caracteres." })
    .optional(),
  authorization_number: z
    .string()
    .min(9, { message: "Tamanho mínimo: 9 caracteres." })
    .optional(),
  nuvs: z
    .string()
    .min(44, { message: "Tamanho mínimo: 44 caracteres." })
    .optional(),
  name: z
    .string()
    .min(1, { message: "Por favor, insira seu nome corretamente." })
    .optional(),
  crm: z
    .string()
    .min(6, { message: "Por favor, insira o CRM corretamente." })
    .optional(),
  cpf: z.string().min(11, { message: "CPF incorreto." }).optional(),
});

/**
 * Tipo de payload de Cadastro para manipulação de dados via useForm e request assíncrono
 */
export type SignUpPayload = z.infer<typeof SignUpSchema>;

/**
 * Tipo de Schema de Login e Cadastro para verificação de dados via Zod
 */
export const LoginSchema = z.union([SignInSchema, SignUpSchema]);

/**
 * Tipo de payload de Login e Cadastro para dados do useForm
 */
export type LoginPayload = z.infer<typeof LoginSchema>;

/**
 * Retorna o tipo de Schema a ser utilizado pelo Zod, com base na URL de Login ou Cadastro
 */
export const getSchema = (formType: AuthFormTypeEnum) => {
  return formType === AuthFormTypeEnum.SignIn ? SignInSchema : SignUpSchema;
};

/**
 * A SER IMPLEMENTADO
 * Payload de resposta do login, especificando os tokens de acesso
 */
export type LoginResponse = {
  access_token: string; // client-side
  refresh_token: string; // server-side, back-end
};

/**
 * Tipos de atores da aplicação
 */
export enum Role {
  "PHARMACY" = "pharmacy",
  "MEDIC" = "medic",
  "PATIENT" = "patient",
}

export interface User {
  email: string;
  password: string;
  role: Role;
}
