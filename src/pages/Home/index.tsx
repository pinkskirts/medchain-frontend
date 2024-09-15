import * as _ from "./styles";
import { useParams } from "react-router-dom";

export default function Home() {
    const { role } = useParams();
    
    return(
        <_.Container>
            HOME <br />
            Funcionalidade: { role }
        </_.Container>
    );
}