import { useState } from "react";


const useAuthentication = () => { 

    const [isPasswordVisible, setIsVisible] = useState<boolean>(true);

    const [rememberLogin, setRememberLogin] = useState(false);

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberLogin(event.target.checked);
    };

    return {
        isPasswordVisible,
        setIsVisible,
        handleCheckbox,
        rememberLogin,
    };
}

export default useAuthentication;