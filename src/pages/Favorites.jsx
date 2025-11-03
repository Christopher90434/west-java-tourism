import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';
import { tourismData } from '../assets/data/tourismData';
import { culinaryData } from '../assets/data/culinaryData';
import TourismCard from '../components/Card/TourismCard';
import CulinaryCard from '../components/Card/CulinaryCard';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, toggleFavorite } = useAppContext();

  // Separate tourism and culinary favorites
  const favoriteTourism = tourismData.filter(item => favorites.includes(item.id));
  const favoriteCulinary = culinaryData.filter(item => favorites.includes(`food-${item.id}`));

  const clearAllFavorites = () => {
    if (window.confirm('Hapus semua favorit?')) {
      favorites.forEach(id => toggleFavorite(id));
    }
  };

  const totalFavorites = favoriteTourism.length + favoriteCulinary.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaHeart className="text-red-500" size={40} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Favorit Saya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-90"
          >
            {totalFavorites} item yang Anda sukai
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {totalFavorites > 0 ? (
          <>
            {/* Clear All Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={clearAllFavorites}
                className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <FaTrash />
                Hapus Semua
              </button>
            </div>

            {/* Favorite Tourism */}
            {favoriteTourism.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Destinasi Wisata ({favoriteTourism.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {favoriteTourism.map((destination) => (
                    <motion.div
                      key={destination.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <TourismCard destination={destination} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Favorite Culinary */}
            {favoriteCulinary.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Kuliner ({favoriteCulinary.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {favoriteCulinary.map((food) => (
                    <motion.div
                      key={food.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <CulinaryCard food={food} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          // Empty State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <FaHeart className="text-gray-300 text-8xl mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-400 mb-4">
              Belum Ada Favorit
            </h3>
            <p className="text-gray-500 mb-8 text-lg">
              Mulai tambahkan destinasi atau kuliner favorit Anda dengan klik ikon hati
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/tourism"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Jelajahi Wisata
              </Link>
              <Link
                to="/culinary"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Jelajahi Kuliner
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
