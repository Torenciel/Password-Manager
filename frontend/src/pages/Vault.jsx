import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../services/api";

import { FaRegCopy } from "react-icons/fa";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export default function Vault() {
  const [openId, setOpenId] = useState(null);
  const [accounts, setAccounts] = useState([]);

  function toggleAccount(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  function copyPassword(password) {
    navigator.clipboard.writeText(password);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Supprimer ce compte ?");
    if (!confirmDelete) return;

    try {
      await apiFetch(`/api/passwords/${id}`, {
        method: "DELETE",
      });

      setAccounts((prev) => prev.filter((acc) => acc.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    async function load() {
      try {
        const data = await apiFetch("/api/passwords");
        setAccounts(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen text-gray-100 p-6">
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

        <div className="bg-gray-900 rounded-lg divide-y divide-gray-800 overflow-hidden">
          {accounts.map((account) => {
            const isOpen = openId === account.id;

            return (
              <div
                key={account.id}
                className={`
                  p-4 cursor-pointer transition
                  ${isOpen ? "bg-gray-800" : "hover:bg-gray-800"}
                `}
                onClick={() => toggleAccount(account.id)}
              >
                {/* Row */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{account.service_name}</div>
                    <div className="text-sm text-gray-400">{account.login}</div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/accounts/${account.id}/edit`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-lg px-2 py-2 rounded bg-gray-700 hover:bg-gray-600"
                    >
                      <MdModeEdit />
                    </Link>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(account.id);
                      }}
                      className="text-lg px-2 py-2 rounded bg-gray-700 hover:bg-gray-600"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 flex flex-row items-center ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyPassword(account.password);
                    }}
                    className="rounded cursor-pointer flex text-gray-400 hover:text-white"
                  >
                    <div className="text-sm mr-4">
                      <span className="text-gray-400">Password:</span>{" "}
                      {account.password}
                    </div>
                    <FaRegCopy />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
