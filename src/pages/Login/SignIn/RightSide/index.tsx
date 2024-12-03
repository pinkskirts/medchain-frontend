import * as _ from "./styles";
import { EyeHideInputIcon, EyeShowInputIcon } from "@theme/icons";
import { theme } from "@theme/index";
import Spinner from "@components/UI/Loaders/Spinner";
import Label from "@components/Login/Label";
import useAuthentication from "hooks/useAuthentication";
import Input from "@components/Login/Input";
import InputError from "@components/Login/InputError";
import { useContext } from "react";
import { UserRoleContext } from "context/UserRoleContext";

export default function SignInRightSide() {
  const userRoleContext = useContext(UserRoleContext);
  const authenticationHook = useAuthentication({
    setUserSelectedRole: userRoleContext.setUserSelectedRole,
  });

  return (
    <_.SignInRightSideContainer>
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

        <_.LoginForm
          onSubmit={authenticationHook.handleSubmit(
            authenticationHook.handleAuthForm
          )}
        >
          <_.FormInputDiv>
            <Label>Email</Label>
            <Input
              name="email"
              register={authenticationHook.register}
              placeholder="Insira seu email"
              autoComplete="email"
            />
            <InputError errors={authenticationHook.errors} fieldName="email" />
          </_.FormInputDiv>

          <_.FormInputDiv>
            <Label>Senha</Label>
            <Input
              name="password"
              register={authenticationHook.register}
              placeholder="Insira sua senha"
              autoComplete="password"
              visible={authenticationHook.isPasswordVisible}
            />
            <_.TogglePasswordVisibilityDiv
              onClick={() =>
                authenticationHook.setIsVisible(
                  !authenticationHook.isPasswordVisible
                )
              }
            >
              {authenticationHook.isPasswordVisible ? (
                <EyeHideInputIcon size={25} color={theme.colors.black[10]} />
              ) : (
                <EyeShowInputIcon size={25} color={theme.colors.black[10]} />
              )}
            </_.TogglePasswordVisibilityDiv>

            <InputError
              errors={authenticationHook.errors}
              fieldName="password"
            />
          </_.FormInputDiv>

          <_.RememberLoginDiv>
            <_.RememberLoginCheckboxDiv>
              <_.RememberLoginCheckbox
                checked={authenticationHook.rememberLogin}
                onChange={authenticationHook.handleCheckbox}
              />
            </_.RememberLoginCheckboxDiv>
            <_.PlainText>Lembrar meu acesso</_.PlainText>
          </_.RememberLoginDiv>

          <_.LoginButtonDiv>
            <_.LoginButton disabled={authenticationHook.isSubmitting}>
              {authenticationHook.isSubmitting ? <Spinner /> : "Acessar"}
            </_.LoginButton>
          </_.LoginButtonDiv>
        </_.LoginForm>

        <_.LoginBottomDiv>
          <_.RequestWarningDiv>
            <_.RequestWarningMsg>
              {authenticationHook.requestWarningMsg ?? ""}
            </_.RequestWarningMsg>
          </_.RequestWarningDiv>
        </_.LoginBottomDiv>
      </_.Content>
    </_.SignInRightSideContainer>
  );
}
