
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">RBAC_UI</div>
        
        <a href="/sign-up"><button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Sign Up</button></a>
      </div>
    </header>
  );
};

export default Header;





//---------------------------------------------------------------------------------------------

