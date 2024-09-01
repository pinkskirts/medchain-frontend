import * as _ from "./styles";
import useAuthentication from "hooks/useAuthentication";
import { EyeHideInputIcon, EyeShowInputIcon } from "@theme/icons";
import { theme } from "@theme/index";
import Spinner from "@components/UI/Loaders/Spinner";

export default function SignInRightSide() {
  const {
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
  } = useAuthentication();

  return (
    <_.Container>
      <_.Content>
        <_.LoginTopDiv>
          <_.LoginTopDivHeader>Login</_.LoginTopDivHeader>
          <_.DoesNotHaveAccountDiv>
            <_.PlainText>Ainda não possui uma conta? </_.PlainText>
            <_.DoesNotHaveAccountLink to={"/sign-up"}>
              <_.PlainText>Clique aqui para se cadastrar.</_.PlainText>
            </_.DoesNotHaveAccountLink>
          </_.DoesNotHaveAccountDiv>
        </_.LoginTopDiv>

        <_.LoginForm onSubmit={handleSubmit(handleAuthForm)}>
          <_.FormInputDiv>
            <_.InputLabel>Email</_.InputLabel>
            <_.Input
              {...register("email")}
              placeholder="Insira seu email"
              autoComplete="email"
            />

            {errors.email ? (
              <_.WarningMsg>{errors.email.message}</_.WarningMsg>
            ) : (
              " "
            )}
          </_.FormInputDiv>

          <_.FormInputDiv>
            <_.InputLabel>Senha</_.InputLabel>
            <_.Input
              {...register("password")}
              placeholder="Insira sua senha"
              autoComplete="password"
              visible={isPasswordVisible}
            />
            <_.TogglePasswordVisibilityDiv
              onClick={() => setIsVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <EyeHideInputIcon size={25} color={theme.colors.black[10]} />
              ) : (
                <EyeShowInputIcon size={25} color={theme.colors.black[10]} />
              )}
            </_.TogglePasswordVisibilityDiv>

            {errors.password ? (
              <_.WarningMsg>{errors.password.message}</_.WarningMsg>
            ) : (
              " "
            )}
          </_.FormInputDiv>

          <_.RememberLoginDiv>
            <_.RememberLoginCheckboxDiv>
              <_.RememberLoginCheckbox
                checked={rememberLogin}
                onChange={handleCheckbox}
              />
            </_.RememberLoginCheckboxDiv>
            <_.PlainText>Lembrar meu acesso</_.PlainText>
          </_.RememberLoginDiv>

          <_.LoginButtonDiv>
            <_.LoginButton disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : "Acessar"}
            </_.LoginButton>
          </_.LoginButtonDiv>
        </_.LoginForm>

        <_.LoginBottomDiv>
          <_.ForgotPasswordLink to={"/"}>
            <_.PlainText>Esqueci minha senha</_.PlainText>
          </_.ForgotPasswordLink>
          <_.RequestWarningMsg>{errorMsg}</_.RequestWarningMsg>
        </_.LoginBottomDiv>
      </_.Content>
    </_.Container>
  );
}
