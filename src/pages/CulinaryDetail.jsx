import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaHeart, FaArrowLeft, FaFire, FaUtensils } from 'react-icons/fa';
import { culinaryData } from '../assets/data/culinaryData';
import { useAppContext } from '../context/AppContext';

const CulinaryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useAppContext();
  
  const food = culinaryData.find(item => item.id === parseInt(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kuliner Tidak Ditemukan</h2>
          <button
            onClick={() => navigate('/culinary')}
            className="bg-accent text-white px-6 py-3 rounded-lg"
          >
            Kembali ke Daftar Kuliner
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(`food-${food.id}`);
  const spicyLevel = { None: 0, Mild: 1, Medium: 2, Spicy: 3 }[food.spicyLevel];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[500px] mt-20">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <button
          onClick={() => navigate('/culinary')}
          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white transition-all"
        >
          <FaArrowLeft /> Kembali
        </button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleFavorite(`food-${food.id}`)}
          className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all"
        >
          <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} size={24} />
        </motion.button>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <span className="bg-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {food.category}
            </span>
            <h1 className="text-5xl font-heading font-bold mb-4">
              {food.name}
            </h1>
            <div className="flex items-center gap-6 text-lg flex-wrap">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{food.rating} ({food.reviews.toLocaleString('id-ID')} reviews)</span>
              </div>
              {spicyLevel > 0 && (
                <div className="flex items-center gap-2">
                  {[...Array(spicyLevel)].map((_, i) => (
                    <FaFire key={i} className="text-red-500" />
                  ))}
                  <span>{food.spicyLevel}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">Tentang {food.name}</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {food.description}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {food.name} adalah salah satu kuliner khas Jawa Barat yang sangat populer. 
                Dengan cita rasa autentik dan bumbu tradisional, makanan ini menjadi favorit 
                wisatawan yang berkunjung ke daerah ini.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                <FaUtensils /> Rekomendasi Tempat Terbaik
              </h3>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1" />
                <div>
                  <p className="font-bold text-lg">{food.bestPlace}</p>
                  <p className="text-gray-600">{food.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="text-gray-600 mb-2">Harga Rata-rata</div>
                <div className="text-4xl font-bold text-accent">
                  Rp {food.price.toLocaleString('id-ID')}
                </div>
                <div className="text-gray-500 text-sm">per porsi</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Kategori</span>
                  <span className="font-semibold">{food.category}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Level Pedas</span>
                  <span className="font-semibold">{food.spicyLevel}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{food.rating}/5</span>
                  </div>
                </div>
              </div>

              <Link
                to="/culinary"
                className="block w-full border-2 border-accent text-accent text-center py-4 rounded-xl font-bold hover:bg-accent hover:text-white transition-colors"
              >
                Lihat Kuliner Lain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulinaryDetail;
