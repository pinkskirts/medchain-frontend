import LeftSide from './LeftSide';
import RightSide from './RightSide';
import * as _ from './styles';

export default function SignIn() {
    return (
        <_.Container>
            <LeftSide />
            <RightSide />
        </_.Container>
    );
}