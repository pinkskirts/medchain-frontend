import * as _ from "./styles";

export default function SignUpLeftSide() {
  return (
    <_.Container>
      <_.Content>
        <_.RegisterTopDiv>
          <_.RegisterTopDivHeader>Cadastro</_.RegisterTopDivHeader>
          <_.DoesHaveAccountLink to={"/"}>
            <_.PlainText>Já possui uma conta? </_.PlainText>
          </_.DoesHaveAccountLink>
        </_.RegisterTopDiv>
      </_.Content>
    </_.Container>
  );
}
