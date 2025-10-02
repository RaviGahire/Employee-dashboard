import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
