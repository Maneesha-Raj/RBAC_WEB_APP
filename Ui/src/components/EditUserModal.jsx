
//EditUserModal.jsx

import React, { useState, useEffect } from "react";

const EditUserModal = ({ isOpen, onClose, userId, refreshUserList }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });


  useEffect(() => {
    if (isOpen && userId) {
      fetch(`/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            name: data.name,
            email: data.email,
            role: data.role,
            status: data.status,
          });
        })
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [isOpen, userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("User updated successfully!");
          refreshUserList(); // Refresh the user list after updating
          onClose(); // Close the modal
        } else {
          alert("Failed to update user.");
        }
      })
      .catch((err) => console.error("Error updating user:", err));
  };

  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
              
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;








//--------------------------------------------------------------------------------------------------

