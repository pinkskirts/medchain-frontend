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
import { authMessages } from "utils/auth-messages";

const useAuthentication = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const mockedUser = {
    email: "admin@admin.com",
    password: "admin",
  };

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

  const [requestWarningMsg, setRequestWarningMsg] = useState<string>();
  const [isPasswordVisible, setIsVisible] = useState<boolean>(true);
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberLogin(event.target.checked);
  };

  const handleAuthForm: SubmitHandler<CombinedPayload> = async (data) => {
    setRequestWarningMsg("");

    if (formType === "") {
      return handleSignInRequest(data as SignInPayload);
    }

    return handleSignUpRequest(data as SignUpPayload);
  };

  async function handleSignInRequest(data: SignInPayload) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // mocka tempo de request

      if (
        data.email.trim() !== mockedUser.email ||
        data.password.trim() !== mockedUser.password
      ) {
        throw Error();
      }

      navigate("/home");
    } catch (error) {
      setRequestWarningMsg(authMessages["USER-NOT-FOUND"]);
    }
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
    requestWarningMsg,
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
