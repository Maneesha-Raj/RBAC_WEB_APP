
// //Sidebar.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Sidebar = ({ setActiveView }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-1/5 bg-blue-900 text-white flex flex-col">
//       <div className="p-4 text-center">
//         <h1 className="text-2xl font-bold">Admin Panel</h1>
//       </div>
//       <ul className="mt-4 space-y-4">
//         <li
//           className="hover:bg-blue-700 p-3 cursor-pointer"
//           onClick={() => setActiveView("addUser")}
//         >
//           Add Users
//         </li>
//         <li
//           className="hover:bg-blue-700 p-3 cursor-pointer"
//           onClick={() => navigate("/user-table")} // Redirect to UserTable page
//         >
//           View Users
//         </li>
//         <li
//           className="hover:bg-blue-700 p-3 cursor-pointer"
//           onClick={() => setActiveView("searchUsers")}
//         >
//           Search Users
//         </li>
//         <li className="hover:bg-blue-700 p-3 cursor-pointer">Logout</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;







//------------------------------------------------------------------


import React from "react";

const Sidebar = ({ setActiveView }) => {
  return (
    <div className="w-1/5 bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <ul className="mt-4 space-y-4">
        <li
          className="hover:bg-blue-700 p-3 cursor-pointer"
          onClick={() => setActiveView("addUser")}
        >
          Add Users
        </li>
        <li
          className="hover:bg-blue-700 p-3 cursor-pointer"
          onClick={() => setActiveView("viewUsers")}
        >
          View Users
        </li>
        <li
          className="hover:bg-blue-700 p-3 cursor-pointer"
          onClick={() => setActiveView("searchUsers")}
        >
          Search Users
        </li>
        <li className="hover:bg-blue-700 p-3 cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;




//---------------------------------------------------------------------------------------------------


