import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject harus diisi';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // CHECK LOGIN STATUS
    if (!isLoggedIn) {
      toast.error('Anda harus login terlebih dahulu untuk mengirim pesan!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      return;
    }

    if (!validateForm()) {
      toast.error('Mohon lengkapi form dengan benar');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(`Pesan dari ${user?.name} berhasil dikirim! Kami akan segera menghubungi Anda.`);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: 'Alamat',
      content: 'Jl. Contoh No. 123, Bandung, Jawa Barat 40123',
      color: 'bg-blue-500',
    },
    {
      icon: <FaPhone size={30} />,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      color: 'bg-green-500',
    },
    {
      icon: <FaEnvelope size={30} />,
      title: 'Email',
      content: 'info@jawabaratjourney.com',
      color: 'bg-red-500',
    },
  ];

  const socialMedia = [
    { icon: <FaFacebook size={24} />, name: 'Facebook', link: '#', color: 'hover:text-blue-600' },
    { icon: <FaInstagram size={24} />, name: 'Instagram', link: '#', color: 'hover:text-pink-600' },
    { icon: <FaTwitter size={24} />, name: 'Twitter', link: '#', color: 'hover:text-blue-400' },
    { icon: <FaYoutube size={24} />, name: 'YouTube', link: '#', color: 'hover:text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-90"
          >
            Kami siap membantu perjalanan wisata Anda
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Kirim Pesan</h2>
              {isLoggedIn && (
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  ✓ Logged in as {user?.name}
                </div>
              )}
            </div>

            {/* Login Required Alert */}
            {!isLoggedIn && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg flex items-start gap-3"
              >
                <FaLock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold text-yellow-800 mb-1">⚠️ Login Diperlukan</p>
                  <p className="text-yellow-700 text-sm mb-3">
                    Anda harus login terlebih dahulu untuk mengirim pesan kepada kami.
                  </p>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Login Sekarang
                  </button>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isLoggedIn}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-primary'
                  } ${!isLoggedIn ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Masukkan nama Anda"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isLoggedIn}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-primary'
                  } ${!isLoggedIn ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={!isLoggedIn}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-primary'
                  } ${!isLoggedIn ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Judul pesan"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={!isLoggedIn}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-primary'
                  } ${!isLoggedIn ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Tulis pesan Anda di sini..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isLoggedIn}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  isLoggedIn
                    ? 'bg-primary text-white hover:bg-secondary hover:shadow-lg ' +
                      (isSubmitting ? 'opacity-50 cursor-not-allowed' : '')
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Mengirim...
                  </>
                ) : !isLoggedIn ? (
                  <>
                    <FaLock />
                    Silakan Login Terlebih Dahulu
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211042117!2d107.57311709999999!3d-6.903444400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ikuti Kami</h3>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all shadow-md hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                Dapatkan update terbaru tentang destinasi wisata, promo menarik, dan tips perjalanan 
                dengan mengikuti media sosial kami.
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-primary text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Jam Operasional</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-semibold">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-semibold">Tutup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
