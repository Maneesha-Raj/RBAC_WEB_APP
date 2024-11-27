import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import AddUserModal from "../components/AddUserModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Fetch users from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4"
        onClick={() => setShowAddModal(true)}
      >
        Add User
      </button>
      <UserTable users={users} setUsers={setUsers} />
      {showAddModal && (
        <AddUserModal setShowAddModal={setShowAddModal} setUsers={setUsers} />
      )}
    </div>
  );
};

export default Users;
