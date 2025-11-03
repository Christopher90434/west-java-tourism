import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-heading font-bold mb-4">
              🏔️ Jawa Barat Journey
            </h3>
            <p className="text-gray-400 mb-4">
              Platform terpercaya untuk menemukan destinasi wisata dan kuliner terbaik di Jawa Barat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/tourism" className="hover:text-primary transition-colors">Destinasi Wisata</Link></li>
              <li><Link to="/culinary" className="hover:text-primary transition-colors">Kuliner</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li><Link to="/tourism?category=Nature" className="hover:text-primary transition-colors">Wisata Alam</Link></li>
              <li><Link to="/tourism?category=Culture" className="hover:text-primary transition-colors">Wisata Budaya</Link></li>
              <li><Link to="/tourism?category=Beach" className="hover:text-primary transition-colors">Pantai</Link></li>
              <li><Link to="/culinary?category=Traditional" className="hover:text-primary transition-colors">Kuliner Tradisional</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" />
                <span>Jl. Contoh No. 123, Bandung, Jawa Barat</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
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
