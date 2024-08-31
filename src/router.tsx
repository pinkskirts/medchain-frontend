import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Login/SignIn';
import SignUp from 'pages/Login/SignUp';
import Home from 'pages/Home';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/home' element={<Home />}/>
        </Routes>
    );
}