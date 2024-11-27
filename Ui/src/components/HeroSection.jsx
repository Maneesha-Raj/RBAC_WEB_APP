

import React from "react";
import Bgimage from "../assets/images/group-business-executives-discussing-laptop-their-des.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${Bgimage})`,
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>

      
      <div className="relative container mx-auto text-center py-20 text-white">
        <h1 className="text-4xl font-bold">
          Creative & Innovative Digital Solution
        </h1>
        <p className="text-lg mt-4">Creative & Innovative</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/login">
            <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-500">
              Log In
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



//----------------------------------------------------------------------------------------------------

