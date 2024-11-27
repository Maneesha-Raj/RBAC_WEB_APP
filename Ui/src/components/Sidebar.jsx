
// //Sidebar.jsx



import React from "react";
import Logout from "./Logout";

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
        <li className="hover:bg-indigo-700 p-3 cursor-pointer"><Logout /></li>
      </ul>
    </div>
  );
};

export default Sidebar;




//---------------------------------------------------------------------------------------------------


