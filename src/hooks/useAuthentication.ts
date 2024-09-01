import { useState } from "react";
import {
  AuthFormTypeEnum,
  CombinedPayload,
  CombinedSchema,
  SignInPayload,
  SignUpPayload,
} from "types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const useAuthentication = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const formType: AuthFormTypeEnum =
    pathname === "/sign-up" ? AuthFormTypeEnum.SignUp : AuthFormTypeEnum.SignIn;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CombinedPayload>({
    mode: "onSubmit",
    resolver: zodResolver(CombinedSchema),
  });

  const [errorMsg, setRequestWarningMsg] = useState<string>(" ");
  const [isPasswordVisible, setIsVisible] = useState<boolean>(true);
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberLogin(event.target.checked);
  };

  const handleAuthForm: SubmitHandler<CombinedPayload> = async (data) => {
    setRequestWarningMsg("teste");

    if (formType === "") {
      return handleSignInRequest(data as SignInPayload);
    }

    return handleSignUpRequest(data as SignUpPayload);
  };

  async function handleSignInRequest(data: SignInPayload) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      navigate("/home");
    } catch (error) {}
  }

  async function handleSignUpRequest(data: SignUpPayload) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      navigate("/");
    } catch (error) {
      // iterar sobre erro.
      setError("email", {
        // pode ser root tb pra determinar erros de back
        message: "Esse email ja foi escolhido.",
      });
    }
  }

  return {
    errorMsg,
    isPasswordVisible,
    setIsVisible,
    handleCheckbox,
    rememberLogin,

    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleAuthForm,
  };
};

export default useAuthentication;
