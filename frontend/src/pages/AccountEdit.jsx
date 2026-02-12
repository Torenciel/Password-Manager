import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountForm from "../components/accounts/AccountForm";
import { apiFetch } from "../services/api";

export default function AccountEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await apiFetch(`/api/passwords/${id}`);

        setAccount({
          serviceName: data.service_name,
          username: data.login,
          password: data.password,
        });
      } catch (err) {
        setError(err.message);
      }
    }

    load();
  }, [id]);

  async function handleUpdate(data) {
    try {
      await apiFetch(`/api/passwords/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          service_name: data.serviceName,
          login: data.username,
          password: data.password,
        }),
      });

      navigate("/vault", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  if (!account) return <div className="p-6">Chargement...</div>;

  return (
    <div className="min-h-screen text-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">Edit account</h1>

        {error && <p className="text-red-400">{error}</p>}

        <AccountForm
          initialValues={account}
          onSubmit={handleUpdate}
          submitLabel="Update"
        />
      </div>
    </div>
  );
}
