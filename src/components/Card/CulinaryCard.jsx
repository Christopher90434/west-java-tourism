import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaHeart, FaRegHeart, FaFire } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';

const CulinaryCard = ({ food }) => {
  const { favorites, toggleFavorite } = useAppContext();
  const isFavorite = favorites.includes(`food-${food.id}`);

  const spicyIcons = {
    None: 0,
    Mild: 1,
    Medium: 2,
    Spicy: 3,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative"
    >
      {/* Image Container - REAL IMAGES */}
      <Link 
        to={`/culinary/${food.id}`} 
        className="block relative h-56 overflow-hidden bg-gray-200"
      >
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=400&h=300&fit=crop';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {food.category}
          </span>
        </div>

        {/* Spicy Level */}
        {spicyIcons[food.spicyLevel] > 0 && (
          <div className="absolute bottom-4 left-4 flex space-x-1 bg-black/40 px-2 py-1 rounded-lg">
            {[...Array(spicyIcons[food.spicyLevel])].map((_, i) => (
              <FaFire key={i} className="text-red-500" size={14} />
            ))}
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-accent font-bold text-sm">
            Rp {food.price.toLocaleString('id-ID')}
          </span>
        </div>
      </Link>

      {/* Favorite Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(`food-${food.id}`);
        }}
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-100 transition-colors"
      >
        {isFavorite ? (
          <FaHeart className="text-red-500" size={18} />
        ) : (
          <FaRegHeart className="text-gray-600" size={18} />
        )}
      </motion.button>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-bold text-gray-800 mb-2 line-clamp-1">
          {food.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {food.description}
        </p>

        {/* Best Place */}
        <div className="flex items-center text-gray-600 mb-3 bg-gray-50 px-3 py-2 rounded-lg">
          <FaMapMarkerAlt className="mr-2 text-accent flex-shrink-0" size={12} />
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-gray-500">Tempat Terbaik</span>
            <span className="text-sm font-semibold text-gray-800 line-clamp-1">
              {food.bestPlace}
            </span>
          </div>
        </div>

        {/* Rating & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" size={14} />
            <span className="font-semibold text-sm text-gray-800">{food.rating}</span>
            <span className="text-gray-500 text-xs">
              ({(food.reviews / 1000).toFixed(1)}k)
            </span>
          </div>

          <Link
            to={`/culinary/${food.id}`}
            className="text-accent font-semibold text-xs hover:text-orange-600 transition-colors whitespace-nowrap"
          >
            Lihat Detail →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CulinaryCard;
