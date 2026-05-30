import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import MembershipPage from './pages/MembershipPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
