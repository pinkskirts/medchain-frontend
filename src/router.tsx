import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login/SignIn";
import SignUp from "pages/Login/SignUp";
import Dashboard from "pages/Dashboard";
import AddPrescription from "pages/AddPrescription";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dash/visualizar-receitas" element={<Dashboard />} />
      <Route path="/dash/adicionar-receita" element={<AddPrescription />} />
    </Routes>
  );
}
