import AccountForm from "../components/accounts/AccountForm";

export default function AccountCreate() {
  function handleCreate(data) {
    console.log("Create", data);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">
          New account
        </h1>

        <AccountForm
          onSubmit={handleCreate}
          submitLabel="Create"
        />
      </div>
    </div>
  );
}
