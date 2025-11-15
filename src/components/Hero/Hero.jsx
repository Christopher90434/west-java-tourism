import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Hero = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const destinations = [
    { value: 'tangkuban-perahu', label: 'Tangkuban Perahu' },
    { value: 'kawah-putih', label: 'Kawah Putih' },
    { value: 'ranca-upas', label: 'Ranca Upas' },
    { value: 'braga-street', label: 'Braga Street' },
    { value: 'gedung-sate', label: 'Gedung Sate' },
    { value: 'citarum-waterfall', label: 'Citarum Waterfall' },
    { value: 'dago-waterfall', label: 'Dago Waterfall' },
    { value: 'flower-garden', label: 'Flower Garden' },
    { value: 'tebing-keraton', label: 'Tebing Keraton' },
    { value: 'tegalega-lake', label: 'Tegalega Lake' },
  ];

  const handleExplore = (e) => {
    e.preventDefault();
    if (selectedDestination) {
      navigate(`/tourism?destination=${selectedDestination}`);
    } else {
      navigate('/tourism');
    }
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40"
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
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
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Jelajahi Keindahan
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Jawa Barat
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Temukan destinasi wisata menakjubkan dan kuliner khas Sunda yang akan membuat perjalanan Anda tak terlupakan
          </p>
        </motion.div>

        {/* Destination Selector & Date Picker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleExplore}
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row gap-4 items-stretch"
          >
            {/* Destination Dropdown */}
            <div className="flex-1 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                Pilih Destinasi
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 z-10" size={20} />
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all text-gray-700 font-medium bg-white appearance-none cursor-pointer"
                >
                  <option value="">Semua Destinasi</option>
                  {destinations.map((dest) => (
                    <option key={dest.value} value={dest.value}>
                      {dest.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Picker */}
            <div className="flex-1 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                Tanggal Kunjungan
              </label>
              <div className="relative">
                <FaCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 z-10 pointer-events-none" size={20} />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Pilih tanggal..."
                  dateFormat="dd MMMM yyyy"
                  minDate={new Date()}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all text-gray-700 font-medium cursor-pointer"
                  popperClassName="z-50"
                  calendarClassName="shadow-2xl"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:pt-7">
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Jelajahi</span>
                <FaArrowRight />
              </button>
            </div>
          </form>
        </motion.div>

        {/* STATS DIHAPUS - Sudah ada di Home.jsx */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
