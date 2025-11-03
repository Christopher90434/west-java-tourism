import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login
      const userData = {
        name: 'User',
        email: formData.email,
        loginTime: new Date().toLocaleString('id-ID'),
      };
      login(userData);
      toast.success('Login berhasil! Selamat datang kembali.');
      setTimeout(() => navigate('/'), 1500);
    } else {
      // Simulate register
      if (!formData.name.trim()) {
        toast.error('Nama harus diisi');
        return;
      }
      
      const userData = {
        name: formData.name,
        email: formData.email,
        registrationTime: new Date().toLocaleString('id-ID'),
      };
      login(userData);
      toast.success(`Registrasi berhasil! Selamat datang, ${formData.name}!`);
      setTimeout(() => navigate('/'), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-secondary flex items-center justify-center px-4 py-20">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? 'Selamat Datang' : 'Daftar Akun'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Login untuk melanjutkan' : 'Buat akun baru'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan nama Anda"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-primary hover:underline">
                Lupa password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg hover:bg-secondary transition-colors"
          >
            {isLogin ? 'Login' : 'Daftar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? 'Daftar sekarang' : 'Login'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
