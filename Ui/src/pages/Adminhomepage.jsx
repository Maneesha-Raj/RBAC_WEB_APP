

// Adminhomepage.jsx


import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import AddUserModal from "../components/AddUserModal";
import UserTable from "../components/UserTable";
import SearchUser from "../components/SearchUser";

const Adminhomepage = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [userCount, setUserCount] = useState(0);

 
  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUserCount(data.length);
      })
      .catch((err) => console.error(err));
  };

  const renderView = () => {
    switch (activeView) {
      case "addUser":
        return (
          <AddUserModal
            setActiveView={setActiveView}
            refreshUserCount={fetchUserCount}
          />
        );
      case "viewUsers":
        return <div><UserTable setActiveView={setActiveView} /></div>; 
      case "searchUsers":
        return <div><SearchUser setActiveView={setActiveView} /></div>; 
      default:
        return <Dashboard userCount={userCount} />;
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
       
        <Sidebar setActiveView={setActiveView} />
        
        <div className="w-4/5">{renderView()}</div>
      </div>
    </>
  );
};

export default Adminhomepage;





//---------------------------------------------------------------------------

