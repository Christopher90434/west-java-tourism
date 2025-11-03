import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHeart, FaCode, FaRocket, FaCheckCircle, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Modal from '../components/Modal/Modal';
import { useCountUp } from '../hooks/useCountUp';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [destinasiCount, destinasiRef] = useCountUp(50);
  const [kulinerCount, kulinerRef] = useCountUp(100);
  const [ratingCount, ratingRef] = useCountUp(4.8, 2000, 0);

  const features = {
    before: [
      'Website statis tanpa interaktivitas',
      'Tidak ada fitur pencarian',
      'Layout yang kurang responsif',
      'Tidak ada animasi',
      'Data hardcoded tanpa struktur',
      'Loading time yang lambat'
    ],
    after: [
      'Single Page Application (SPA) dengan React',
      'Search dengan autocomplete & debouncing',
      'Fully responsive untuk semua device',
      'Smooth animations dengan Framer Motion',
      'Komponen reusable & modular',
      'State management dengan Context API',
      'Custom hooks untuk logic reuse',
      'Interactive map dengan Leaflet',
      'Modal & Portal untuk UX yang baik',
      'Optimized performance & lazy loading'
    ]
  };

  const techStack = [
    { name: 'React JS', color: 'bg-blue-500' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'Framer Motion', color: 'bg-purple-500' },
    { name: 'React Router', color: 'bg-red-500' },
    { name: 'Leaflet Maps', color: 'bg-green-500' },
    { name: 'React Icons', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold mb-4"
          >
            Tentang Project Ini
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90"
          >
            Website Tourism Modern dengan React JS
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats with Counter */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            ref={destinasiRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-primary mb-4 flex justify-center">
              <FaAward size={50} />
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2">{destinasiCount}+</div>
            <div className="text-gray-600">Destinasi Wisata</div>
          </motion.div>

          <motion.div
            ref={kulinerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-accent mb-4 flex justify-center">
              <FaHeart size={50} />
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2">{kulinerCount}+</div>
            <div className="text-gray-600">Menu Kuliner</div>
          </motion.div>

          <motion.div
            ref={ratingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-yellow-500 mb-4 flex justify-center">
              <FaUsers size={50} />
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2">{ratingCount.toFixed(1)}</div>
            <div className="text-gray-600">Rating Pengguna</div>
          </motion.div>
        </div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
              CB
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Christopher Bryan Budi Susanto</h2>
              <p className="text-primary font-semibold mb-4">Full Stack Web Developer | React Specialist</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya adalah seorang web developer yang passionate dalam menciptakan aplikasi web modern dan responsif. 
                Project Jawa Barat Journey ini merupakan hasil optimasi dan modernisasi dari website tourism tradisional 
                menjadi Single Page Application yang powerful menggunakan React JS.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-primary" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Tentang Project</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Website Jawa Barat Journey telah mengalami transformasi total dari website statis tradisional 
            menjadi modern Single Page Application (SPA) menggunakan React JS. Proses optimasi ini tidak 
            hanya meningkatkan performa, tetapi juga memberikan pengalaman pengguna yang jauh lebih baik 
            dengan fitur-fitur interaktif dan modern.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <span>❌</span> Sebelum Optimasi
              </h3>
              <ul className="space-y-2">
                {features.before.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                <span>✅</span> Setelah Optimasi
              </h3>
              <ul className="space-y-2">
                {features.after.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaRocket className="text-primary" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${tech.color} text-white p-4 rounded-lg text-center font-semibold shadow-lg hover:scale-105 transition-transform`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Fitur Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Interactive UI/UX',
                description: 'Animasi smooth dan transisi yang memukau di setiap interaksi'
              },
              {
                title: 'Smart Search',
                description: 'Pencarian real-time dengan autocomplete dan debouncing'
              },
              {
                title: 'Interactive Maps',
                description: 'Peta interaktif dengan marker untuk setiap lokasi wisata'
              },
              {
                title: 'Responsive Design',
                description: 'Tampilan sempurna di mobile, tablet, dan desktop'
              },
              {
                title: 'Fast Performance',
                description: 'Loading cepat dengan code splitting dan lazy loading'
              },
              {
                title: 'Modern Architecture',
                description: 'Component-based structure yang mudah di-maintain'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
