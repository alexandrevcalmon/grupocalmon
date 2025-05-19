import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-10 w-10 text-orange-600" />
              <span className="text-3xl font-bold text-gray-900">Calmon</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition">Blog</Link>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium">Blog</Link>
            <a href="#contact" className="block px-3 py-2 bg-orange-600 text-white rounded-full font-medium">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;