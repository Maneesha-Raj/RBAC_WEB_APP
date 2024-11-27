

import React, { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)) // Set the users to the state
      .catch((err) => console.error("Error fetching users:", err));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const deleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: "DELETE" })
      .then(() => setUsers((prev) => prev.filter((user) => user._id !== id))) // Filter out the deleted user from the list
      .catch((err) => console.error(err));
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
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;







//-------------------------------------------------------------------------------------------------

// import React from "react";

// const UserTable = ({ users, setUsers }) => {
//   const deleteUser = (id) => {
//     fetch(`/api/users/${id}`, { method: "DELETE" })
//       .then(() => setUsers((prev) => prev.filter((user) => user.id !== id)))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <table className="w-full border-collapse border border-gray-300">
//       <thead>
//         <tr>
//           <th className="border border-gray-300 p-2">Name</th>
//           <th className="border border-gray-300 p-2">Email</th>
//           <th className="border border-gray-300 p-2">Role</th>
//           <th className="border border-gray-300 p-2">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td className="border border-gray-300 p-2">{user.name}</td>
//             <td className="border border-gray-300 p-2">{user.email}</td>
//             <td className="border border-gray-300 p-2">{user.role}</td>
//             <td className="border border-gray-300 p-2">
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={() => deleteUser(user.id)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
