import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const TourismCard = ({ destination }) => {
  const { favorites, toggleFavorite } = useAppContext();
  const navigate = useNavigate();
  const isFavorite = favorites.includes(destination.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      onClick={() => navigate(`/tourism/${destination.id}`)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {destination.category}
          </span>
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(destination.id);
          }}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" size={20} />
          ) : (
            <FaRegHeart className="text-gray-600" size={20} />
          )}
        </motion.button>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="text-primary font-bold">
            Rp {destination.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-bold text-gray-800 mb-2 line-clamp-1">
          {destination.name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-2 text-primary" size={14} />
          <span className="text-sm">{destination.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-gray-800">
              {destination.rating}
            </span>
            <span className="text-gray-500 text-sm">
              ({destination.reviews.toLocaleString('id-ID')})
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary font-semibold text-sm hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/tourism/${destination.id}`);
            }}
          >
            Lihat Detail →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourismCard;
