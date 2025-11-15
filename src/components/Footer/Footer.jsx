import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/images/logo-jabar-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand - DENGAN LOGO */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="Logo Jawa Barat"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-white text-xl font-heading font-bold leading-tight">
                  Jawa Barat
                </h3>
                <span className="text-orange-500 text-sm font-semibold tracking-wide">
                  Journey
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Platform terpercaya untuk menemukan destinasi wisata dan kuliner terbaik di Jawa Barat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/tourism" className="hover:text-orange-500 transition-colors">Destinasi Wisata</Link></li>
              <li><Link to="/culinary" className="hover:text-orange-500 transition-colors">Kuliner</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li><Link to="/tourism?category=Nature" className="hover:text-orange-500 transition-colors">Wisata Alam</Link></li>
              <li><Link to="/tourism?category=Culture" className="hover:text-orange-500 transition-colors">Wisata Budaya</Link></li>
              <li><Link to="/tourism?category=Beach" className="hover:text-orange-500 transition-colors">Pantai</Link></li>
              <li><Link to="/culinary?category=Traditional" className="hover:text-orange-500 transition-colors">Kuliner Tradisional</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-orange-500 flex-shrink-0" />
                <span>Jl. Contoh No. 123, Bandung, Jawa Barat</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-orange-500" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-500" />
                <span>info@jawabaratjourney.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Jawa Barat Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
