import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkedAlt, FaUtensils, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero/Hero';
import TourismCard from '../components/Card/TourismCard';
import CulinaryCard from '../components/Card/CulinaryCard';
import { tourismData } from '../assets/data/tourismData';
import { culinaryData } from '../assets/data/culinaryData';
import { useCountUp } from '../hooks/useCountUp';

const Home = () => {
  const [destinasiCount, destinasiRef] = useCountUp(50);
  const [kulinerCount, kulinerRef] = useCountUp(100);
  const [wisatawanCount, wisatawanRef] = useCountUp(10000);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const featuredTourism = tourismData.slice(0, 3);
  const featuredCulinary = culinaryData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section dengan Counter Animation */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Dalam Angka</h2>
            <p className="text-lg md:text-xl opacity-90">Platform wisata terpercaya untuk Jawa Barat</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              ref={destinasiRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <FaMapMarkedAlt className="text-5xl md:text-6xl mx-auto mb-4" />
              <div className="text-4xl md:text-6xl font-bold mb-2">
                {destinasiCount}+
              </div>
              <div className="text-lg md:text-xl opacity-90">Destinasi Wisata</div>
            </motion.div>

            <motion.div
              ref={kulinerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <FaUtensils className="text-5xl md:text-6xl mx-auto mb-4" />
              <div className="text-4xl md:text-6xl font-bold mb-2">
                {kulinerCount}+
              </div>
              <div className="text-lg md:text-xl opacity-90">Menu Kuliner</div>
            </motion.div>

            <motion.div
              ref={wisatawanRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <FaStar className="text-5xl md:text-6xl mx-auto mb-4" />
              <div className="text-4xl md:text-6xl font-bold mb-2">
                {wisatawanCount.toLocaleString('id-ID')}+
              </div>
              <div className="text-lg md:text-xl opacity-90">Wisatawan</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Platform terlengkap untuk merencanakan petualangan Anda di Jawa Barat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkedAlt size={50} />,
                title: 'Destinasi Terlengkap',
                description: 'Ratusan destinasi wisata dengan informasi detail, foto, dan review terpercaya',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: <FaUtensils size={50} />,
                title: 'Kuliner Autentik',
                description: 'Rekomendasi tempat makan terbaik dengan cita rasa khas Sunda yang autentik',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: <FaStar size={50} />,
                title: 'Review Terpercaya',
                description: 'Ribuan review dari wisatawan untuk membantu keputusan perjalanan Anda',
                color: 'from-yellow-500 to-yellow-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tourism Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12" data-aos="fade-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-2">
                Destinasi Wisata Populer
              </h2>
              <p className="text-gray-600 text-lg">
                Jelajahi tempat-tempat menakjubkan di Jawa Barat
              </p>
            </div>
            <Link
              to="/tourism"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all group"
            >
              Lihat Semua 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTourism.map((destination, index) => (
              <div key={destination.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <TourismCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Culinary Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12" data-aos="fade-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-2">
                Kuliner Khas Jawa Barat
              </h2>
              <p className="text-gray-600 text-lg">
                Rasakan kelezatan kuliner tradisional Sunda
              </p>
            </div>
            <Link
              to="/culinary"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-4 transition-all group"
            >
              Lihat Semua 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCulinary.map((food, index) => (
              <div key={food.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <CulinaryCard food={food} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                Platform Modern untuk Wisata Jawa Barat
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Kami menggunakan teknologi terkini untuk memberikan pengalaman terbaik dalam merencanakan 
                perjalanan wisata Anda. Dengan interface yang intuitif dan fitur-fitur canggih, menjelajahi 
                Jawa Barat tidak pernah semudah ini.
              </p>
              <ul className="space-y-4">
                {[
                  'Interface modern dan user-friendly',
                  'Informasi destinasi yang lengkap dan akurat',
                  'Peta interaktif dengan lokasi real-time',
                  'Review dan rating dari ribuan wisatawan',
                  'Rekomendasi personal berdasarkan preferensi',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                alt="Tourism"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">4.8/5</div>
                <div className="text-sm opacity-90">Rating Pengguna</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-40 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-16 h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Siap Memulai Petualangan?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Bergabunglah dengan ribuan wisatawan lainnya dan temukan pengalaman tak terlupakan 
            di Jawa Barat bersama kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tourism"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Jelajahi Destinasi
            </Link>
            <Link
              to="/about"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
