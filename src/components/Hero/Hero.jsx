import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/tourism');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">
            Jelajahi Keindahan
            <br />
            <span className="text-accent">Jawa Barat</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Temukan destinasi wisata menakjubkan dan kuliner khas yang akan membuat perjalanan Anda tak terlupakan
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 flex flex-col md:flex-row gap-3 md:gap-2"
          >
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <FaMapMarkerAlt className="text-primary mr-3" size={20} />
              <input
                type="text"
                placeholder="Cari destinasi..."
                className="flex-1 outline-none text-gray-700"
              />
            </div>
            
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200">
              <FaCalendar className="text-primary mr-3" size={20} />
              <input
                type="text"
                placeholder="Kapan?"
                className="flex-1 outline-none text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <FaSearch />
              <span>Cari</span>
            </button>
          </form>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
        >
          {[
            { number: '50+', label: 'Destinasi' },
            { number: '100+', label: 'Kuliner' },
            { number: '10K+', label: 'Wisatawan' },
          ].map((stat, index) => (
            <div key={index} className="text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-accent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
