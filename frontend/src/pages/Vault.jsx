import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegCopy } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export default function Vault() {
  const [openId, setOpenId] = useState(null);

  const accounts = [
    {
      id: 1,
      serviceName: "GitHub",
      username: "user@email.com",
      password: "••••••••",
    },
    {
      id: 2,
      serviceName: "Google",
      username: "user@gmail.com",
      password: "••••••••",
    },
    {
      id: 3,
      serviceName: "GitLab",
      username: "user@gitlab.com",
      password: "••••••••",
    },
    {
      id: 4,
      serviceName: "Bitbucket",
      username: "user@bitbucket.org",
      password: "••••••••",
    },
    {
      id: 5,
      serviceName: "Twitter",
      username: "user@twitter.com",
      password: "••••••••",
    },
    {
      id: 6,
      serviceName: "LinkedIn",
      username: "user@linkedin.com",
      password: "••••••••",
    },
    {
      id: 7,
      serviceName: "Facebook",
      username: "user@facebook.com",
      password: "••••••••",
    },
    {
      id: 8,
      serviceName: "Instagram",
      username: "user@instagram.com",
      password: "••••••••",
    },
    {
      id: 9,
      serviceName: "Amazon",
      username: "user@amazon.com",
      password: "••••••••",
    },
    {
      id: 10,
      serviceName: "Netflix",
      username: "user@netflix.com",
      password: "••••••••",
    },
    {
      id: 11,
      serviceName: "Spotify",
      username: "user@spotify.com",
      password: "••••••••",
    },
    {
      id: 12,
      serviceName: "Dropbox",
      username: "user@dropbox.com",
      password: "••••••••",
    },
    {
      id: 13,
      serviceName: "Slack",
      username: "user@slack.com",
      password: "••••••••",
    },
    {
      id: 14,
      serviceName: "Discord",
      username: "user@discord.com",
      password: "••••••••",
    },
    {
      id: 15,
      serviceName: "Reddit",
      username: "user@reddit.com",
      password: "••••••••",
    },
    {
      id: 16,
      serviceName: "Notion",
      username: "user@notion.so",
      password: "••••••••",
    },
    {
      id: 17,
      serviceName: "Figma",
      username: "user@figma.com",
      password: "••••••••",
    },
    {
      id: 18,
      serviceName: "Trello",
      username: "user@trello.com",
      password: "••••••••",
    },
    {
      id: 19,
      serviceName: "PayPal",
      username: "user@paypal.com",
      password: "••••••••",
    },
    {
      id: 20,
      serviceName: "Microsoft",
      username: "user@outlook.com",
      password: "••••••••",
    },
  ];

  function toggleAccount(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  function copyPassword(password) {
    navigator.clipboard.writeText(password);
  }

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
                    <div className="font-medium">{account.serviceName}</div>
                    <div className="text-sm text-gray-400">
                      {account.username}
                    </div>
                  </div>

                  {/* Edit button */}
                  <Link
                    to={`/accounts/${account.id}/edit`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm px-2 py-2 rounded bg-gray-700 hover:bg-gray-600"
                  >
                    <MdModeEdit />
                  </Link>
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
