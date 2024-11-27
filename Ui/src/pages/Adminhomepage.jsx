

// Adminhomepage.jsx


import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import AddUserModal from "../components/AddUserModal";
import UserTable from "../components/UserTable";

const Adminhomepage = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [userCount, setUserCount] = useState(0);

  // Fetch the user count when the component loads
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
        return <div><UserTable setActiveView={setActiveView} /></div>; // Placeholder for View Users
      case "searchUsers":
        return <div>Search Users Page</div>; // Placeholder for Search Users
      default:
        return <Dashboard userCount={userCount} />;
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar setActiveView={setActiveView} />
        {/* Main Content */}
        <div className="w-4/5">{renderView()}</div>
      </div>
    </>
  );
};

export default Adminhomepage;





//---------------------------------------------------------------------------


// import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard from "../components/Dashboard";
// import AddUserModal from "../components/AddUserModal";

// const Adminhomepage = () => {
//   const [activeView, setActiveView] = useState("dashboard");

//   const renderView = () => {
//     switch (activeView) {
//       case "addUser":
//         return <AddUserModal />;
//       case "viewUsers":
//         return <div>View Users Page</div>; // Placeholder for View Users
//       case "searchUsers":
//         return <div>Search Users Page</div>; // Placeholder for Search Users
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen bg-gray-100">
//         {/* Sidebar */}
//         <Sidebar setActiveView={setActiveView} />
//         {/* Main Content */}
//         <div className="w-4/5">{renderView()}</div>
//       </div>
//     </>
//   );
// };

// export default Adminhomepage;






//----------------------------------------------------------------------------------------------

// import React from 'react'
// import Dashboard from '../components/Dashboard'
// import Sidebar from '../components/Sidebar'

// const Adminhomepage = () => {
//   return (
//     <>
//         <div className="flex h-screen bg-gray-100">
//           {/* Sidebar */}
//           <Sidebar />
//           {/* Main Content */}
//           <Dashboard />
//         </div>



//     </>
//   )
// }

// export default Adminhomepage