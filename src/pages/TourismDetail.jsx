import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaClock, FaMoneyBillWave, FaHeart, FaArrowLeft, FaCheckCircle, FaPhone } from 'react-icons/fa';
import { tourismData } from '../assets/data/tourismData';
import { useAppContext } from '../context/AppContext';

const TourismDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useAppContext();
  
  const destination = tourismData.find(item => item.id === parseInt(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Destinasi Tidak Ditemukan</h2>
          <button
            onClick={() => navigate('/tourism')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Kembali ke Daftar Wisata
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(destination.id);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[500px] mt-20">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/tourism')}
          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white transition-all shadow-lg z-10"
        >
          <FaArrowLeft /> Kembali
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(destination.id)}
          className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all shadow-lg z-10"
        >
          <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} size={24} />
        </motion.button>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {destination.category}
            </span>
            <h1 className="text-5xl font-heading font-bold mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-6 text-lg flex-wrap">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{destination.rating} ({destination.reviews.toLocaleString('id-ID')} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Destinasi</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {destination.description}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {destination.name} merupakan salah satu destinasi wisata favorit di {destination.location}. 
                Tempat ini menawarkan pengalaman yang tak terlupakan dengan pemandangan alam yang menakjubkan 
                dan fasilitas yang lengkap. Cocok untuk liburan keluarga, gathering, atau sekadar melepas penat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Fasilitas</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.facilities && destination.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-800 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-orange-500 mb-3">💡 Tips Berkunjung</h3>
              <p className="text-gray-700 leading-relaxed">{destination.tips}</p>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg sticky top-24 space-y-4"
            >
              <div className="mb-6">
                <div className="text-gray-600 mb-2 text-sm font-medium">Harga Tiket Masuk</div>
                <div className="text-4xl font-bold text-orange-500">
                  Rp {destination.price.toLocaleString('id-ID')}
                </div>
                <div className="text-gray-500 text-sm">per orang</div>
              </div>

              <div className="space-y-4 mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaClock className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Jam Operasional</div>
                    <div className="text-gray-600 text-sm">{destination.openTime}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Lokasi</div>
                    <div className="text-gray-600 text-sm">{destination.location}</div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl"
              >
                <FaPhone size={20} />
                Hubungi Kami
              </motion.button>

              <Link
                to="/tourism"
                className="block w-full border-2 border-orange-500 text-orange-500 text-center py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Lihat Destinasi Lain
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Related Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Destinasi Serupa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tourismData
              .filter(item => item.category === destination.category && item.id !== destination.id)
              .slice(0, 3)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/tourism/${item.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-orange-500 font-bold">
                            Rp {item.price.toLocaleString('id-ID')}
                          </span>
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" size={14} />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TourismDetail;
