import { Link } from 'react-router-dom';
import { Share2, Copy, Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">KHCWW</h3>
            <p className="text-gray-300">Empowering healthcare workers through unity, support, and growth.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-accent-400 smooth-transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent-400 smooth-transition">About</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-400 smooth-transition">Gallery</Link></li>
              <li><Link to="/membership" className="hover:text-accent-400 smooth-transition">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@khcww.co.ke</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+254 728 854966</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Kirinyaga County, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-400 smooth-transition"><Share2 size={24} /></a>
              <a href="#" className="hover:text-accent-400 smooth-transition"><Copy size={24} /></a>
              <a href="#" className="hover:text-accent-400 smooth-transition"><Heart size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8">
          <p className="text-center text-gray-400">
            Website Designed & Developed by Dennis Murimi
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            © 2024 Kirinyaga Healthcare Workers Welfare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
