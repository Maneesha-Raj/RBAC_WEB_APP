

import React, { useState, useEffect } from 'react';

const SearchUser = () => {
  const [userId, setUserId] = useState(''); 
  const [users, setUsers] = useState([]); 
  const [userDetails, setUserDetails] = useState(null); 
  const [loading, setLoading] = useState(false); 

  
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  
  const handleSearch = () => {
    if (!userId) {
      alert('Please select a user ID.');
      return;
    }

    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search User</h2>

      <div className="space-y-4">
       
        <div>
          <label htmlFor="userId" className="block text-lg font-semibold mb-2">
            Select User ID:
          </label>
          <select
            id="userId"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} 
          >
            <option value="" disabled>Select a user ID</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user._id}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            onClick={handleSearch}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      
      {userDetails && !loading && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">User Details</h3>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Role:</strong> {userDetails.role}</p>
          <p><strong>Status:</strong> {userDetails.status}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;








//--------------------------------------------------------------------
