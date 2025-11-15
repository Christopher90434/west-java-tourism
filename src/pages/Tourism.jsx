import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaTh, FaList, FaMap } from 'react-icons/fa';
import TourismCard from '../components/Card/TourismCard';
import MapView from '../components/Map/MapView';
import Modal from '../components/Modal/Modal';
import { tourismData, categories } from '../assets/data/tourismData';
import { useAppContext } from '../context/AppContext';
import { useDebounce } from '../hooks/useDebounce';
import { formatCurrency } from '../utils/helpers';

const Tourism = () => {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useAppContext();
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = tourismData
    .filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                           item.location.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                           item.description.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.reviews - a.reviews;
      }
    });

  const handleQuickView = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - ORANGE */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Destinasi Wisata Jawa Barat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-90"
          >
            Temukan {tourismData.length} destinasi menakjubkan untuk petualangan Anda
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8 sticky top-24 z-40"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search - ORANGE FOCUS */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari destinasi atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            {/* Category Filter - ORANGE FOCUS */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'Semua Kategori' : cat}
                </option>
              ))}
            </select>

            {/* Sort - ORANGE FOCUS */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            >
              <option value="popular">Terpopuler</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
              <option value="name">Nama A-Z</option>
            </select>

            {/* Filter Button - ORANGE */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                showFilters
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaFilter />
              <span className="hidden md:inline">Filter</span>
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 pt-6 border-t border-gray-200 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Rentang Harga
                    </label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-lg font-bold text-orange-500">
                        <span>{formatCurrency(priceRange[0])}</span>
                        <span>-</span>
                        <span>{formatCurrency(priceRange[1])}</span>
                      </div>
                      
                      <div className="relative pt-2 pb-6">
                        <input
                          type="range"
                          min="0"
                          max="200000"
                          step="10000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                          style={{
                            background: `linear-gradient(to right, #f97316 0%, #f97316 ${(priceRange[1]/200000)*100}%, #e5e7eb ${(priceRange[1]/200000)*100}%, #e5e7eb 100%)`
                          }}
                        />
                        
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Rp 0</span>
                          <span>Rp 50K</span>
                          <span>Rp 100K</span>
                          <span>Rp 150K</span>
                          <span>Rp 200K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-end gap-2">
                    <button
                      onClick={() => {
                        setPriceRange([0, 200000]);
                        setSelectedCategory('All');
                        setSearchQuery('');
                      }}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Reset Filter
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* View Mode Switcher & Results Count */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <p className="text-gray-600">
              Menampilkan <span className="font-bold text-orange-500">{filteredData.length}</span> dari{' '}
              <span className="font-bold">{tourismData.length}</span> destinasi
              {selectedCategory !== 'All' && (
                <span>
                  {' '}dalam kategori <span className="font-bold text-orange-500">{selectedCategory}</span>
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title="Grid View"
            >
              <FaTh size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title="List View"
            >
              <FaList size={20} />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'map'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title="Map View"
            >
              <FaMap size={20} />
            </button>
          </div>
        </div>

        {/* Map View */}
        {viewMode === 'map' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <MapView
              locations={filteredData.filter((d) => d.coordinates)}
              height="600px"
            />
          </motion.div>
        )}

        {/* Grid/List View */}
        {viewMode !== 'map' && (
          <>
            {filteredData.length > 0 ? (
              <motion.div
                layout
                className={
                  viewMode === 'grid'
                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'flex flex-col gap-6'
                }
              >
                <AnimatePresence>
                  {filteredData.map((destination, index) => (
                    <motion.div
                      key={destination.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={viewMode === 'list' ? 'w-full' : ''}
                    >
                      {viewMode === 'grid' ? (
                        <TourismCard destination={destination} />
                      ) : (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
                          <div className="md:w-80 h-64 md:h-auto relative overflow-hidden">
                            <img
                              src={destination.image}
                              alt={destination.name}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {destination.category}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 p-6">
                            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                              {destination.name}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-3">
                              <FaMapMarkerAlt className="mr-2 text-orange-500" />
                              <span>{destination.location}</span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {destination.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-2xl font-bold text-orange-500">
                                  {formatCurrency(destination.price)}
                                </span>
                                <span className="text-gray-500 text-sm ml-2">per orang</span>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleQuickView(destination)}
                                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                  Quick View
                                </button>
                                <button
                                  onClick={() => window.location.href = `/tourism/${destination.id}`}
                                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                  Lihat Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <FaMapMarkerAlt className="text-gray-300 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">
                  Tidak ada destinasi ditemukan
                </h3>
                <p className="text-gray-500 mb-6">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 200000]);
                  }}
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Reset Pencarian
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Quick View Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedDestination?.name || ''}
        size="lg"
      >
        {selectedDestination && (
          <div>
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-orange-500" />
                <span>{selectedDestination.location}</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">
                {formatCurrency(selectedDestination.price)}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{selectedDestination.description}</p>
            <div className="mb-4">
              <h4 className="font-bold text-lg mb-2">Fasilitas:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedDestination.facilities?.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => (window.location.href = `/tourism/${selectedDestination.id}`)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Lihat Detail Lengkap
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Tourism;
