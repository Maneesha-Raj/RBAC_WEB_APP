//UserTable.jsx


import React, { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)) 
      .catch((err) => console.error("Error fetching users:", err));
  }, []); 

  const deleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: "DELETE" })
      .then(() => setUsers((prev) => prev.filter((user) => user._id !== id))) 
      .catch((err) => console.error(err));
  };

  const handleEditClick = (userId) => {
    setSelectedUserId(userId);
    setEditModalOpen(true);
  };

  const refreshUserList = () => {
    
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error refreshing users:", err));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
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
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2 flex gap-6">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEditClick(user._id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          userId={selectedUserId}
          refreshUserList={refreshUserList}
        />
      )}
    </div>
  );
};

export default UserTable;




//------------------------------------------------------------------------------------------------------------

