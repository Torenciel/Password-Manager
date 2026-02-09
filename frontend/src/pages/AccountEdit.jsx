import AccountForm from "../components/accounts/AccountForm";

export default function AccountEdit() {
  const account = {
    serviceName: "GitHub",
    username: "user@email.com",
    password: "",
    url: "https://github.com",
    notes: "",
  };

  function handleUpdate(data) {
    console.log("Update", data);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">
          Edit account
        </h1>

        <AccountForm
          initialValues={account}
          onSubmit={handleUpdate}
          submitLabel="Update"
        />
      </div>
    </div>
  );
}
