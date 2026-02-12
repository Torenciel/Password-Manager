import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";

import AccountForm from "../components/accounts/AccountForm";

export default function AccountCreate() {
  const navigate = useNavigate();
  async function handleCreate(data) {
    try {
      await apiFetch("/api/passwords", {
        method: "POST",
        body: JSON.stringify({
          service_name: data.serviceName,
          login: data.username,
          password_hash: data.password,
        }),
      });

      navigate("/vault");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen text-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">New account</h1>

        <AccountForm onSubmit={handleCreate} submitLabel="Create" />
      </div>
    </div>
  );
}
