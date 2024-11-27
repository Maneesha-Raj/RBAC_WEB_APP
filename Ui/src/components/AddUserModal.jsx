
//AddUserModal.jsx


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddUserModal = ({ refreshUserCount }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        // Refresh user count
        refreshUserCount();
        // Redirect back to the dashboard after user is added
        navigate("/admin-home"); // This will navigate to the '/dashboard' route
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role"
            className="w-full border p-2 mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;






//--------------------------------------------------------------------------------------------------

// import React, { useState } from "react";

// const AddUserModal = ({ setActiveView, refreshUserCount }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, role }),
//     })
//       .then((res) => res.json())
//       .then((newUser) => {
//         // Refresh user count
//         refreshUserCount();
//         // Redirect back to Dashboard
//         setActiveView("dashboard");
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded shadow-lg w-1/3">
//         <h2 className="text-lg font-bold mb-4">Add User</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full border p-2 mb-4"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-2 mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             className="w-full border p-2 mb-4"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUserModal;






//-----------------------------------------------------------------------------------------

// import React, { useState } from "react";

// const AddUserModal = ({ setShowAddModal, setUsers }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:5000/api/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, role }),
//     })
//       .then((res) => res.json())
//       .then((newUser) => {
//         setUsers((prev) => [...prev, newUser]);
//         setShowAddModal(false);
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded shadow-lg w-1/3 ">
//         <h2 className="text-lg font-bold mb-4">Add User</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full border p-2 mb-4"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-2 mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             className="w-full border p-2 mb-4"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUserModal;
