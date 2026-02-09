import { Link } from "react-router-dom";

export default function Vault() {
  // later this comes from API
  const accounts = [
    { id: 1, serviceName: "GitHub", username: "user@email.com" },
    { id: 2, serviceName: "Google", username: "user@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Vault</h1>

          <Link
            to="/accounts/new"
            className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
          >
            New account
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg divide-y divide-gray-800">
          {accounts.map((account) => (
            <Link
              key={account.id}
              to={`/accounts/${account.id}/edit`}
              className="block p-4 hover:bg-gray-800"
            >
              <div className="font-medium">
                {account.serviceName}
              </div>
              <div className="text-sm text-gray-400">
                {account.username}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
