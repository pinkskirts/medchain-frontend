import * as _ from "./styles";
import SignUpLeftSide from "./LeftSide";
import SignUpRightSide from "./RightSide";

export default function SignUp() {
  return (
    <_.Container>
      <SignUpLeftSide />
      <SignUpRightSide />
    </_.Container>
  );
}
