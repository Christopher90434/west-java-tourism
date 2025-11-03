import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { tourismData } from '../../assets/data/tourismData';
import { culinaryData } from '../../assets/data/culinaryData';
import { useDebounce } from '../../hooks/useDebounce';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      const searchResults = [
        ...tourismData
          .filter(item => 
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(debouncedQuery.toLowerCase())
          )
          .map(item => ({ ...item, type: 'tourism' })),
        ...culinaryData
          .filter(item => 
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            item.bestPlace.toLowerCase().includes(debouncedQuery.toLowerCase())
          )
          .map(item => ({ ...item, type: 'culinary' }))
      ].slice(0, 6);
      
      setResults(searchResults);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectResult = (item) => {
    navigate(`/${item.type}/${item.id}`);
    setQuery('');
    setShowResults(false);
    if (onClose) onClose();
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowResults(true)}
          placeholder="Cari destinasi wisata atau kuliner... (contoh: Tangkuban, Batagor, Bandung)"
          className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none text-lg transition-all"
          autoFocus
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        )}
      </div>

      {/* Search Tips */}
      {!query && (
        <div className="mt-4 text-sm text-gray-500 space-y-2">
          <p className="font-semibold">💡 Tips Pencarian:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Ketik nama destinasi (contoh: "Tangkuban Perahu")</li>
            <li>Ketik nama kuliner (contoh: "Batagor")</li>
            <li>Ketik nama kota (contoh: "Bandung")</li>
          </ul>
        </div>
      )}

      {/* Search Results */}
      <AnimatePresence>
        {showResults && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-200 max-h-96 overflow-y-auto"
          >
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <p className="text-sm font-semibold text-gray-700">
                Ditemukan {results.length} hasil
              </p>
            </div>
            {results.map((item, index) => (
              <motion.div
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSelectResult(item)}
                className="flex items-center gap-4 p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 truncate">{item.name}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <FaMapMarkerAlt className="mr-1 flex-shrink-0" size={12} />
                    <span className="truncate">
                      {item.type === 'tourism' ? item.location : item.bestPlace}
                    </span>
                  </div>
                  {item.price && (
                    <p className="text-sm text-primary font-semibold mt-1">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  )}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ${
                  item.type === 'tourism' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {item.type === 'tourism' ? 'Wisata' : 'Kuliner'}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      {showResults && query && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-8 bg-gray-50 rounded-xl text-center"
        >
          <p className="text-gray-500 mb-2">😕 Tidak ada hasil untuk "{query}"</p>
          <p className="text-sm text-gray-400">Coba kata kunci lain</p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
