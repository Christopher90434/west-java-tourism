import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext'; // TAMBAHKAN INI
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import TourismDetail from './pages/TourismDetail';
import Culinary from './pages/Culinary';
import CulinaryDetail from './pages/CulinaryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/tourism/:id" element={<TourismDetail />} />
              <Route path="/culinary" element={<Culinary />} />
              <Route path="/culinary/:id" element={<CulinaryDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-20">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <a
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
      >
        Kembali ke Home
      </a>
    </div>
  </div>
);

export default App;
