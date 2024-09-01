import * as _ from "./styles";
import { theme } from "@theme/index";
import img from "@assets/signin-img.svg";
import HeaderText from "@components/Login/Headers/HeaderText";
import HeadersDiv from "@components/Login/Headers/HeadersDiv";
import HeadersMultiColoredSection from "@components/Login/Headers/HeadersMultiColoredSection";

export default function SignInLeftSide() {
  return (
    <_.Container>
      <_.Content>
        <HeadersDiv>
          <HeaderText color={theme.colors.white[10]} marginTop="5%">
            Bem-vindo(a)!
          </HeaderText>

          <HeadersMultiColoredSection>
            <HeaderText color={theme.colors.white[10]}>
              Acesse sua conta para ter
            </HeaderText>
            <HeaderText color={theme.colors.white[10]}>
              acesso garantido às suas
            </HeaderText>
            <HeaderText color={theme.colors.blue[20]}> receitas</HeaderText>
            <HeaderText color={theme.colors.white[10]}>.</HeaderText>
          </HeadersMultiColoredSection>
        </HeadersDiv>

        <_.SignInImage src={img} />
      </_.Content>
    </_.Container>
  );
}
