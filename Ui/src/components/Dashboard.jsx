
//Dashboard.jsx

import React from "react";

const Dashboard = ({ userCount }) => {
  return (
    <div className="w-4/5 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full"
          />
          <span className="ml-2 font-medium">John David</span>
        </div>
      </div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-red shadow-md p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold">{userCount}</h2>
          <p className="text-gray-600">Users Count</p>
        </div>
        {/* Other statistic cards */}
      </div>
    </div>
  );
};

export default Dashboard;






//-------------------------------------------------------------------------------------

// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="w-4/5 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Dashboard</h1>
//         <div className="flex items-center">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="Profile"
//             className="rounded-full"
//           />
//           <span className="ml-2 font-medium">John David</span>
//         </div>
//       </div>
//       {/* Statistics Cards */}
//       <div className="grid grid-cols-4 gap-6">
//         <div className="bg-white shadow-md p-6 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">2500</h2>
//           <p className="text-gray-600">Welcome</p>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">123.50</h2>
//           <p className="text-gray-600">Average Time</p>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">1805</h2>
//           <p className="text-gray-600">Collections</p>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg text-center">
//           <h2 className="text-2xl font-bold">54</h2>
//           <p className="text-gray-600">Comments</p>
//         </div>
//       </div>
//       {/* Social Media Stats */}
//       <div className="grid grid-cols-5 gap-6 mt-8">
//         <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">35k</h2>
//           <p>Friends</p>
//         </div>
//         <div className="bg-blue-400 text-white p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">584k</h2>
//           <p>Followers</p>
//         </div>
//         <div className="bg-blue-700 text-white p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">758+</h2>
//           <p>Contacts</p>
//         </div>
//         <div className="bg-red-500 text-white p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">450</h2>
//           <p>Followers</p>
//         </div>
//         <div className="bg-red-400 text-white p-6 rounded-lg text-center">
//           <h2 className="text-xl font-bold">57</h2>
//           <p>Circles</p>
//         </div>
//       </div>
//       {/* Chart Section */}
//       <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
//         <h2 className="text-lg font-bold">Extra Area Chart</h2>
//         <p className="text-gray-600 mt-2">[Chart placeholder]</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
