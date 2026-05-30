import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/image.png"
              alt="KHCWW Logo"
              className="h-12 w-12"
            />
            <div className="hidden sm:block">
              <h1 className="font-montserrat font-bold text-primary-500 text-lg">KHCWW</h1>
              <p className="text-xs text-secondary-600">Healthcare Workers Welfare</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">About</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">Gallery</Link>
            <Link to="/leadership" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">Leadership</Link>
            <Link to="/membership" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">Membership</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 smooth-transition font-medium">Contact</Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">About</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">Gallery</Link>
            <Link to="/leadership" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">Leadership</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">Membership</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-light rounded">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
