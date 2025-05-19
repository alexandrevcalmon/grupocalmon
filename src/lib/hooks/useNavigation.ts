import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleMenu,
  };
};