import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/lib/hooks/useNavigation';
import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';
import Container from '@/components/ui/Container';

const Navbar = () => {
  const { isOpen, toggleMenu } = useNavigation();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <Container>
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/images/logogrupocalmon.png" 
                alt="Grupo Calmon" 
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;