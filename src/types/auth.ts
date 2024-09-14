import { z } from "zod";

export enum AuthFormTypeEnum {
  SignIn = "",
  SignUp = "sign-up",
}

export type AuthFormDataType = SignInPayload | SignUpPayload;

const SignInSchema = z.object({
  email: z.string().email({
    message: "Formato de e-mail inválido.",
  }),
  password: z.string().min(1, { message: "Campo de senha vazio." }),
});

const SignUpSchema = z.object({
  email: z.string().email({
    message:
      "Insira um e-mail válido (lembre-se de usar o @<domain>.com, por exemplo).",
  }),
  password: z.string().min(8, { message: "Tamanho mínimo: 8 caracteres." }),
});

export const CombinedSchema = z.union([SignInSchema, SignUpSchema]);

export type SignInPayload = z.infer<typeof SignInSchema>;
export type SignUpPayload = z.infer<typeof SignUpSchema>;

export type CombinedPayload = z.infer<typeof CombinedSchema>;

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
};
