import { useState, useEffect } from "react";

const defaultValues = {
  serviceName: "",
  username: "",
  password: "",
  url: "",
  notes: "",
};

export default function AccountForm({
  initialValues,
  onSubmit,
  submitLabel,
}) {
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
    <form onSubmit={handleSubmit}>
      <input name="serviceName" value={formData.serviceName} onChange={handleChange} />
      <input name="username" value={formData.username} onChange={handleChange} />
      <input name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
