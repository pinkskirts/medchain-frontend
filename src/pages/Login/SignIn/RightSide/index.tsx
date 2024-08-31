import useAuthentication from "hooks/useAuthentication";
import * as _ from "./styles";
import { EyeHideInputIcon, EyeShowInputIcon } from "@theme/icons";
import { theme } from "@theme/index";

export default function RightSide() {
    const {
        isPasswordVisible,
        setIsVisible,
        handleCheckbox,
        rememberLogin,
    } = useAuthentication();

    return (
        <_.Container>
            <_.Content>
                
                <_.LoginTopDiv>
                    <_.LoginTopDivHeader>Login</_.LoginTopDivHeader>
                    <_.DoesNotHaveAccountDiv>
                        <_.PlainText>Ainda não possui uma conta? </_.PlainText>
                        <_.DoesNotHaveAccountLink to={'/sign-up'}>
                            <_.PlainText>Clique aqui para se cadastrar.</_.PlainText>                        
                        </_.DoesNotHaveAccountLink>
                    </_.DoesNotHaveAccountDiv>
                </_.LoginTopDiv>

                <_.LoginForm>

                    <_.FormInputDiv>
                        <_.InputLabel>Email</_.InputLabel>
                        <_.Input 
                            placeholder='Insira seu email'
                            autoComplete='email'
                        />
                    </_.FormInputDiv>

                    <_.FormInputDiv>
                        <_.InputLabel>Senha</_.InputLabel>
                        <_.Input 
                            placeholder='Insira sua senha'
                            autoComplete='password'
                            visible={isPasswordVisible}
                        />
                        <_.TogglePasswordVisibilityDiv onClick={() => setIsVisible(!isPasswordVisible)}>
                            {isPasswordVisible? 
                                <EyeHideInputIcon 
                                    size={25} 
                                    color={theme.colors.black[10]}
                                /> 
                                : 
                                <EyeShowInputIcon 
                                    size={25} 
                                    color={theme.colors.black[10]}
                                /> 
                            }
                        </_.TogglePasswordVisibilityDiv>
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
                        <_.LoginButton $text="Acessar" />
                    </_.LoginButtonDiv>

                </_.LoginForm>

                <_.LoginBottomDiv>
                    <_.ForgotPasswordLink to={'/'}>
                        <_.PlainText>Esqueci minha senha</_.PlainText>
                    </_.ForgotPasswordLink>
                </_.LoginBottomDiv>

            </_.Content>
        </_.Container>
    );
}