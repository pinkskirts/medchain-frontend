import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Login/SignIn';
import SignUp from 'pages/Login/SignUp';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    );
}