import React from 'react';

const StatsSection = () => {
  const stats = [
    { title: 'Happy Clients', value: 988 },
    { title: 'Projects Done', value: 988 },
    { title: 'Win Awards', value: 988 },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex justify-center space-x-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold text-blue-600">{stat.value}</h2>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
