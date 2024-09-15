import * as _ from "./styles";
import { EyeHideInputIcon, EyeShowInputIcon } from "@theme/icons";
import { theme } from "@theme/index";
import Spinner from "@components/UI/Loaders/Spinner";
import Label from "@components/Login/Label";
import useAuthentication from "hooks/useAuthentication";
import Input from "@components/Login/Input";
import InputError from "@components/Login/InputError";

export default function SignInRightSide() {
  const {
    handleSubmit,
    handleAuthForm,
    register,
    errors,
    isPasswordVisible,
    setIsVisible,
    rememberLogin,
    handleCheckbox,
    isSubmitting,
    requestWarningMsg,
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
            <Label>Email</Label>
            <Input
              name="email"
              register={register}
              placeholder="Insira seu email"
              autoComplete="email"
            />
            <InputError errors={errors} fieldName="email" />
          </_.FormInputDiv>

          <_.FormInputDiv>
            <Label>Senha</Label>
            <Input
              name="password"
              register={register}
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

            <InputError errors={errors} fieldName="password" />
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
          <_.ForgotPasswordLink to={"/forgot-password"}>
            <_.PlainText>Esqueci minha senha</_.PlainText>
          </_.ForgotPasswordLink>
          <_.RequestWarningDiv>
            <_.RequestWarningMsg>{requestWarningMsg ?? ""}</_.RequestWarningMsg>
          </_.RequestWarningDiv>
        </_.LoginBottomDiv>
      </_.Content>
    </_.Container>
  );
}
