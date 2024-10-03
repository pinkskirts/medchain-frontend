import { useEffect, useState } from "react";
import {
  AuthFormTypeEnum,
  getSchema,
  LoginPayload,
  Role,
  SignInPayload,
  SignUpPayload,
} from "types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { authMessages } from "utils/auth-messages";
import { mockedUsers } from "utils/mocked-users";
import { SelectRole } from "@components/Login/Select";
import { defineToastify } from "@components/ToastifyMessage/helpers";

const useAuthentication = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const formType: AuthFormTypeEnum =
    pathname === "/sign-up" ? AuthFormTypeEnum.SignUp : AuthFormTypeEnum.SignIn;

  const {
    register,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<LoginPayload>({
    mode: "onSubmit",
    resolver: zodResolver(getSchema(formType)),
  });

  const selectRoleOptions: SelectRole[] = [
    { value: "Farmácia", identifier: Role["PHARMACY"] },
    { value: "Médico", identifier: Role["MEDIC"] },
    { value: "Paciente", identifier: Role["PATIENT"] },
  ];

  const [roleSelected, setRoleSelected] = useState<string>(
    "Selecione uma opção"
  );

  /**
   * Reavalia os campos de input caso um novo valor do Select seja selecionado
   * e se o formulario foi submittado
   */
  useEffect(() => {
    if (roleSelected && isSubmitted) {
      trigger();
    }
  }, [roleSelected, trigger, isSubmitted]);

  const [requestWarningMsg, setRequestWarningMsg] = useState<string>();
  const [isPasswordVisible, setIsVisible] = useState<boolean>(true);
  const [rememberLogin, setRememberLogin] = useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberLogin(event.target.checked);
  };

  const getSelectedRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleSelected(event.target.value);
  };

  function getAuthentication(data: SignInPayload) {
    const user = mockedUsers.find(
      (user) =>
        user.email.trim() === data.email.trim() &&
        user.password.trim() === data.password.trim()
    );

    if (user) {
      return { isAuthenticated: true, userRole: user.role };
    }

    return { isAuthenticated: false, userRole: null };
  }

  const handleAuthForm: SubmitHandler<LoginPayload> = async (data) => {
    setRequestWarningMsg("");

    if (formType === "") {
      return handleSignInRequest(data as SignInPayload);
    }

    return handleSignUpRequest(data as SignUpPayload);
  };

  async function handleSignInRequest(data: SignInPayload) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // mocka tempo de request

      const { isAuthenticated, userRole } = getAuthentication(data);

      if (!isAuthenticated) throw Error();

      navigate(`/home/${userRole}`);
    } catch (error) {
      setRequestWarningMsg(authMessages["USER-NOT-FOUND"]);
    }
  }

  async function handleSignUpRequest(data: SignUpPayload) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // mocka tempo de request
      defineToastify(
        "success",
        `Usuário registrado! Email: ${data.email} Senha: ${data.password}`
      );
      navigate("/");
    } catch (error) {
      // iterar sobre erro.
      setError("email", {
        // pode ser root tb pra determinar erros de back
        message: "Email já foi escolhido.",
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
    getSelectedRole,
    selectRoleOptions,
    roleSelected,
  };
};

export default useAuthentication;
