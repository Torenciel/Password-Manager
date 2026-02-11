import { useEffect, useState } from "react";

const defaultValues = {
  serviceName: "",
  username: "",
  password: "",
  url: "",
  notes: "",
};

export default function AccountForm({ initialValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState(defaultValues);

  useEffect(() => {
    if (initialValues) {
      setFormData({ ...defaultValues, ...initialValues });
    }
  }, [initialValues]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Service</label>
        <input
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded py-2 font-medium"
      >
        {submitLabel}
      </button>
    </form>
  );
}
