import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHeart, FaCode, FaRocket, FaCheckCircle, FaGithub, FaLinkedin, FaEnvelope, FaLightbulb, FaPalette, FaMobile, FaChartLine, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { useCountUp } from '../hooks/useCountUp';

const About = () => {
  const [destinasiCount, destinasiRef] = useCountUp(50);
  const [kulinerCount, kulinerRef] = useCountUp(100);
  const [ratingCount, ratingRef] = useCountUp(4.8, 2000, 0);
  const [activeTab, setActiveTab] = useState('project');

  const features = {
    before: [
      'Website statis tanpa interaktivitas',
      'Tidak ada fitur pencarian',
      'Layout yang kurang responsif',
      'Tidak ada animasi',
      'Data hardcoded tanpa struktur',
      'Loading time yang lambat',
      'Navigasi yang membingungkan',
      'Tidak ada state management'
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
      'Optimized performance & lazy loading',
      'Loading animation yang smooth',
      'Consistent orange theme branding'
    ]
  };

  const techStack = [
    { name: 'React JS', color: 'bg-orange-500', icon: '⚛️' },
    { name: 'Tailwind CSS', color: 'bg-orange-600', icon: '🎨' },
    { name: 'Framer Motion', color: 'bg-orange-500', icon: '✨' },
    { name: 'React Router', color: 'bg-orange-600', icon: '🗺️' },
    { name: 'Leaflet Maps', color: 'bg-orange-500', icon: '🌍' },
    { name: 'React Icons', color: 'bg-orange-600', icon: '🎯' },
    { name: 'Context API', color: 'bg-orange-500', icon: '🔄' },
    { name: 'Custom Hooks', color: 'bg-orange-600', icon: '🪝' },
  ];

  const keyFeatures = [
    {
      icon: <FaPalette />,
      title: 'Modern UI/UX Design',
      description: 'Interface yang clean, modern, dan user-friendly dengan konsistensi tema orange',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaMobile />,
      title: 'Fully Responsive',
      description: 'Tampilan sempurna di semua ukuran layar - mobile, tablet, dan desktop',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Performance',
      description: 'Loading cepat dengan optimasi code splitting dan lazy loading',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaGlobe />,
      title: 'Interactive Maps',
      description: 'Peta interaktif dengan marker untuk eksplorasi lokasi wisata',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: <FaLightbulb />,
      title: 'Smart Features',
      description: 'Search real-time, filter advanced, dan favorites system',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure & Reliable',
      description: 'Authentication system dan data management yang aman',
      color: 'from-orange-600 to-orange-700'
    }
  ];

  const achievements = [
    {
      icon: <FaChartLine />,
      stat: '50+',
      label: 'Destinasi Wisata',
      color: 'text-orange-500'
    },
    {
      icon: <FaHeart />,
      stat: '100+',
      label: 'Menu Kuliner',
      color: 'text-orange-600'
    },
    {
      icon: <FaUsers />,
      stat: '10K+',
      label: 'Monthly Visitors',
      color: 'text-orange-500'
    },
    {
      icon: <FaAward />,
      stat: '4.8/5',
      label: 'User Rating',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - ORANGE with Pattern */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 mt-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
          >
            Tentang Jawa Barat Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Platform Tourism Modern dengan React JS untuk Eksplorasi Jawa Barat
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 -mt-16 relative z-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className={`${item.color} mb-3 flex justify-center text-4xl`}>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{item.stat}</div>
              <div className="text-gray-600 text-sm font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'project', label: '📋 Project Overview' },
            { id: 'features', label: '⚡ Key Features' },
            { id: 'tech', label: '💻 Tech Stack' },
            { id: 'developer', label: '👨‍💻 Developer' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project Overview Tab */}
          {activeTab === 'project' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-orange-500" size={32} />
                  <h2 className="text-3xl font-bold text-gray-800">Tentang Project</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>Jawa Barat Journey</strong> adalah platform tourism modern yang dirancang untuk memudahkan wisatawan 
                  dalam mengeksplorasi keindahan Jawa Barat. Website ini telah mengalami transformasi total dari website statis 
                  tradisional menjadi <strong>Single Page Application (SPA)</strong> yang powerful dengan React JS.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Proses modernisasi ini tidak hanya meningkatkan performa dan kecepatan, tetapi juga memberikan 
                  pengalaman pengguna yang jauh lebih baik dengan fitur-fitur interaktif, animasi yang smooth, dan 
                  interface yang user-friendly. Dengan konsistensi tema orange, website ini mencerminkan kehangatan 
                  dan keramahan khas Jawa Barat.
                </p>

                {/* Before & After Comparison */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                      <span>❌</span> Sebelum Optimasi
                    </h3>
                    <ul className="space-y-3">
                      {features.before.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                      <span>✅</span> Setelah Optimasi
                    </h3>
                    <ul className="space-y-3">
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
            </div>
          )}

          {/* Key Features Tab */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <FaRocket className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Project ini dibangun menggunakan teknologi modern dan terkini untuk memastikan performa, 
                skalabilitas, dan maintainability yang optimal.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${tech.color} text-white p-6 rounded-xl text-center font-semibold shadow-lg cursor-pointer`}
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <div className="text-sm">{tech.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-2">🎨</div>
                  <h4 className="font-bold text-gray-800 mb-2">Modern Design</h4>
                  <p className="text-sm text-gray-600">Consistent orange branding dengan Tailwind CSS</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-bold text-gray-800 mb-2">High Performance</h4>
                  <p className="text-sm text-gray-600">Optimized dengan lazy loading & code splitting</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-4xl mb-2">📱</div>
                  <h4 className="font-bold text-gray-800 mb-2">Responsive</h4>
                  <p className="text-sm text-gray-600">Perfect di semua device & screen size</p>
                </div>
              </div>
            </div>
          )}

          {/* Developer Tab */}
          {activeTab === 'developer' && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-40 h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
                  >
                    CB
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-2 text-gray-800">Christopher Bryan Budi Susanto</h2>
                    <p className="text-orange-500 font-semibold text-xl mb-4">Full Stack Web Developer | React Specialist</p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      Saya adalah seorang web developer yang passionate dalam menciptakan aplikasi web modern, responsif, 
                      dan user-friendly. Dengan keahlian khusus di React JS, saya fokus pada pembuatan Single Page 
                      Applications yang performant dan scalable.
                    </p>
                    
                    {/* Social Media Links - CLICKABLE */}
                    <div className="flex gap-4 justify-center md:justify-start mb-6">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Christopher90434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
                        title="GitHub Profile"
                      >
                        <FaGithub size={24} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/christopher-bryan-a7720328a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
                        title="Christopher Bryan"
                      >
                        <FaLinkedin size={24} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:christopherbryan.susanto@gmail.com"
                        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
                        title="Send Email"
                      >
                        <FaEnvelope size={24} />
                      </motion.a>
                    </div>

                    {/* Contact Info Text */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <FaGithub className="text-gray-800" />
                          <a 
                            href="https://github.com/Christopher90434" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-600 font-medium hover:underline"
                          >
                            github.com/Christopher90434
                          </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <FaLinkedin className="text-blue-600" />
                          <a 
                            href="https://www.linkedin.com/in/christopher-bryan-a7720328a" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-600 font-medium hover:underline"
                          >
                            Christopher Bryan
                          </a>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <FaEnvelope className="text-red-500" />
                          <a 
                            href="mailto:christopherbryan.susanto@gmail.com"
                            className="text-orange-500 hover:text-orange-600 font-medium hover:underline"
                          >
                            christopherbryan.susanto@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {['React JS', 'JavaScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'Responsive Web'].map((skill, i) => (
                        <span key={i} className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Goals */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Vision & Mission</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3">🎯 Vision</h4>
                    <p className="opacity-90 leading-relaxed">
                      Menjadi platform tourism digital terdepan untuk eksplorasi Jawa Barat dengan 
                      teknologi modern dan user experience terbaik.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-3">🚀 Mission</h4>
                    <p className="opacity-90 leading-relaxed">
                      Memberikan informasi wisata yang lengkap, akurat, dan mudah diakses untuk 
                      membantu wisatawan merencanakan perjalanan terbaik mereka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
