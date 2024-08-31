import { z } from "zod";

export enum AuthFormTypeEnum {
  SignIn = "",
  SignUp = "sign-up",
}

export type AuthFormDataType = SignInPayload | SignUpPayload;

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

export const CombinedSchema = z.union([SignInSchema, SignUpSchema]);

export type SignInPayload = z.infer<typeof SignInSchema>;
export type SignUpPayload = z.infer<typeof SignUpSchema>;

export type CombinedPayload = z.infer<typeof CombinedSchema>;

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
};
