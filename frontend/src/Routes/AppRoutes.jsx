import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import AccountCreate from "../pages/AccountCreate";
import AccountEdit from "../pages/AccountEdit";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Vault from "../pages/Vault";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/accounts/new" element={<AccountCreate />} />
        <Route path="/accounts/:id/edit" element={<AccountEdit />} />
        <Route path="/vault" element={<Vault />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
