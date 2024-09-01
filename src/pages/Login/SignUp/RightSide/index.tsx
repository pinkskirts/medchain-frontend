import * as _ from "./styles";
import HeaderText from "@components/Login/Headers/HeaderText";
import SignUpImage from "@assets/signup-img.svg";
import { theme } from "@theme/index";
import HeadersDiv from "@components/Login/Headers/HeadersDiv";
import HeadersMultiColoredSection from "@components/Login/Headers/HeadersMultiColoredSection";

export default function SignUpRightSide() {
  return (
    <_.Container>
      <_.Content>
        <HeadersDiv>
          <HeadersMultiColoredSection>
            <HeaderText color={theme.colors.white[10]} marginTop="5%">
              Ainda não possui uma
            </HeaderText>
            <HeaderText color={theme.colors.blue[10]} marginTop="5%">
              {" "}
              conta
            </HeaderText>
            <HeaderText color={theme.colors.white[10]} marginTop="5%">
              ?
            </HeaderText>
          </HeadersMultiColoredSection>

          <HeadersMultiColoredSection>
            <HeaderText color={theme.colors.white[10]}>
              Conte-nos um pouco
            </HeaderText>
            <HeaderText color={theme.colors.white[10]}> mais sobre</HeaderText>
            <HeaderText color={theme.colors.blue[10]}> você</HeaderText>
            <HeaderText color={theme.colors.white[10]}>.</HeaderText>
          </HeadersMultiColoredSection>
        </HeadersDiv>
        <_.SignUpImage src={SignUpImage} />
      </_.Content>
    </_.Container>
  );
}
