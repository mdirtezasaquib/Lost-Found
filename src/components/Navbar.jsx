import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Report Lost', path: '/report-lost' },
    { name: 'View Items', path: '/items' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white font-bold text-xl">
            <FaSearchLocation className="text-2xl text-[#2C67D3]" />
            <span>RetrivO</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition duration-300 ${
                  isActive(item.path) ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#2C67D3]' : ''
                } hover:text-black`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-[#2C67D3] text-3xl" onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 />
          </div>
        </div>
      </nav>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-yellow-500 z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-xl font-bold flex items-center space-x-2">
            <FaSearchLocation className="text-2xl text-[#2C67D3]" />
            <span>RetrivO</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-[#2C67D3] text-2xl">
            <HiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 text-white text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`relative py-1 ${
                isActive(item.path) ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#2C67D3]' : ''
              } hover:text-black`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
