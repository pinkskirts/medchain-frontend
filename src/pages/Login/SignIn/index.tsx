import * as _ from "./styles";
import SignInLeftSide from "./LeftSide";
import SignInRightSide from "./RightSide";

export default function SignIn() {
  return (
    <_.Container>
      <SignInLeftSide />
      <SignInRightSide />
    </_.Container>
  );
}
