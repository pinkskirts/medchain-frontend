import { Link } from 'react-router-dom';
import * as _ from './styles';

export default function SignUp() {
    return (
        <_.Container>
            <_.Content>
                PAGINA DE CADASTRO
                <Link to={'/'}>
                    VOLTAR PARA LOGIN
                </Link>
            </_.Content>
        </_.Container>
    );
}