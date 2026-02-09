import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Vault from "../pages/Vault";
import AccountCreate from "../pages/AccountCreate";
import AccountEdit from "../pages/AccountEdit";
import NotFound from "../pages/NotFound";
import ProtectedLayout from "../components/layout/ProtectedLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/vault" element={<Vault />} />
        <Route path="/accounts/new" element={<AccountCreate />} />
        <Route path="/accounts/:id/edit" element={<AccountEdit />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
