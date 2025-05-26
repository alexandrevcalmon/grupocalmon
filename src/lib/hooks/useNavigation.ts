import { useState, useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = (menuButtonRef: RefObject<HTMLButtonElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, menuButtonRef]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
};