import React from "react";

const UserTable = ({ users, setUsers }) => {
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" })
      .then(() => setUsers((prev) => prev.filter((user) => user.id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Email</th>
          <th className="border border-gray-300 p-2">Role</th>
          <th className="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border border-gray-300 p-2">{user.name}</td>
            <td className="border border-gray-300 p-2">{user.email}</td>
            <td className="border border-gray-300 p-2">{user.role}</td>
            <td className="border border-gray-300 p-2">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
