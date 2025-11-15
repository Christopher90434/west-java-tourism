import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import TourismDetail from './pages/TourismDetail';
import Culinary from './pages/Culinary';
import CulinaryDetail from './pages/CulinaryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import Login from './pages/Login';

// ScrollToTop Component - NO LOADING, JUST SCROLL
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll tanpa loading
    });
  }, [pathname]);

  return null;
}

// App Content Component
function AppContent() {
  const { isLoading, isFirstLoad } = useLoading();

  return (
    <>
      {/* Loading HANYA saat first load */}
      {isLoading && isFirstLoad && <Loading />}
      
      <div className="App">
        <Navbar />
        <ScrollToTop />
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
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <LoadingProvider>
          <Router>
            <AppContent />
          </Router>
        </LoadingProvider>
      </AppProvider>
    </AuthProvider>
  );
}

// NotFound Component - ORANGE THEME
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-20">
    <div className="text-center">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <a
        href="/"
        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
      >
        Kembali ke Home
      </a>
    </div>
  </div>
);

export default App;
