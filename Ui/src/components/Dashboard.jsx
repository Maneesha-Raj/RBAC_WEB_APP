
//Dashboard.jsx

import React from "react";

const Dashboard = ({ userCount }) => {
  return (
    <div className="w-4/5 p-8">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
     
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-red shadow-md p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold">{userCount}</h2>
          <p className="text-gray-600">Users Count</p>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;






//-------------------------------------------------------------------------------------
