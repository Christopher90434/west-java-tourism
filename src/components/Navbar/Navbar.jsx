import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart, FaUser, FaMountain, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import SearchBar from '../SearchBar/SearchBar'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { favorites } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowSearch(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tourism', label: 'Wisata' },
    { path: '/culinary', label: 'Kuliner' },
    { path: '/about', label: 'Tentang' },
    { path: '/contact', label: 'Kontak' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-md shadow-md py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'bg-primary shadow-lg' 
                    : 'bg-primary shadow-md'
                }`}>
                  <FaMountain 
                    size={28} 
                    className="text-white"
                  />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Jawa Barat
                  </span>
                  <span className="text-xs md:text-sm font-medium text-gray-600">
                    Journey
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-all duration-300 relative group text-gray-700 ${
                    location.pathname === link.path
                      ? 'text-primary font-bold'
                      : 'hover:text-primary'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {location.pathname !== link.path && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              ))}
              
              {/* Desktop Icons */}
              <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-200">
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-gray-700 hover:text-primary transition-colors"
                  title="Cari destinasi"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaSearch size={20} />
                  </motion.div>
                </button>

                <Link
                  to="/favorites"
                  className="relative group text-gray-700 hover:text-primary transition-colors"
                  title="Favorit saya"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaHeart size={22} />
                    {favorites.length > 0 && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                      >
                        {favorites.length}
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
                
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary transition-colors"
                  title="Login / Register"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <FaUser size={20} />
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                title="Cari"
              >
                <FaSearch size={20} />
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col p-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`py-3 px-4 rounded-xl transition-all duration-300 block ${
                          location.pathname === link.path
                            ? 'bg-primary text-white font-bold shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <div className="border-t border-gray-200 mt-4 pt-4 flex gap-2">
                    <Link
                      to="/favorites"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100 flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-red-500" />
                        Favorit
                      </span>
                      {favorites.length > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                          {favorites.length}
                        </span>
                      )}
                    </Link>
                    
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-colors"
                    >
                      <FaUser size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Search Modal - UPDATED WITH SEARCHBAR COMPONENT */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-24 px-4"
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaSearch className="text-primary" />
                    Cari Destinasi atau Kuliner
                  </h3>
                  <button
                    onClick={() => setShowSearch(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Tutup"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <SearchBar onClose={() => setShowSearch(false)} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
