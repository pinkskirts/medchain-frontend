import { theme } from "@theme/index";
import * as _ from "./styles";
import img from "@assets/signin-img.svg";

export default function LeftSide() {
    return (
        <_.Container>
            <_.Content>

                <_.HeaderDivs>
                    <_.HeaderText 
                        color={theme.colors.white[10]}
                        margintop="5%"
                        >
                        Bem-vindo(a)!
                    </_.HeaderText>
                    <_.HeaderText 
                        color={theme.colors.white[10]}
                        margintop="-2%"
                        >
                        Acesse sua conta para ter 
                    </_.HeaderText>
                    <_.HeaderText 
                        color={theme.colors.white[10]}
                        margintop="-2%"
                    >
                        acesso garantido às suas
                    </_.HeaderText>
                    <_.HeaderText 
                        color={theme.colors.blue[20]}
                        margintop="-2%"
                    >
                        receitas.
                    </_.HeaderText>
                </_.HeaderDivs>

                <_.SignInImage src={img}/>

            </_.Content>
        </_.Container>
    );
}