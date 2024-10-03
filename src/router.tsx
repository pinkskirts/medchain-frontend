import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login/SignIn";
import SignUp from "pages/Login/SignUp";
import ForgotPassword from "pages/Login/ForgotPassword";
import Dashboard from "pages/Dashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home/:role" element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
