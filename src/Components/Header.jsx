import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-lg ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6  md:fex-row flex-col md:space-y-0 space-y-4">
        <div className="text-white text-2xl font-bold tracking-wide">
          Employee Dashboard
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-white hover:text-blue-200 font-medium transition">Home</a>
          </li>
          <li>
            <a href="/employees" className="text-white hover:text-blue-200 font-medium transition">Employees</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-blue-200 font-medium transition">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;