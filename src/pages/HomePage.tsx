import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/hero.png';

const carouselImages = [
  {
    src: heroImage,
    alt: 'Healthcare professionals'
  },
  {
    src: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
    alt: 'Medical team collaboration'
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
    alt: 'Healthcare workers'
  },
  {
    src: 'https://images.pexels.com/photos/4173612/pexels-photo-4173612.jpeg',
    alt: 'Medical professionals'
  }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="w-full">
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-8 z-20 bg-white/20 hover:bg-white/40 smooth-transition rounded-full p-3 text-white"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="absolute right-8 z-20 bg-white/20 hover:bg-white/40 smooth-transition rounded-full p-3 text-white"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 z-20 flex gap-3 left-1/2 transform -translate-x-1/2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(idx);
              }}
              className={`h-2 smooth-transition ${
                idx === currentIndex ? 'bg-gold w-8' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        >
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6">
            Empowering Healthcare Workers
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Through Unity, Support and Growth
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gold hover:bg-yellow-500 smooth-transition text-primary-900 px-8 py-4 rounded-lg font-bold text-lg">
              Join Membership
            </button>
            <button className="border-2 border-white hover:bg-white/10 smooth-transition px-8 py-4 rounded-lg font-bold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <StatCard label="Members Served" value="5000+" />
            <StatCard label="Departments" value="50+" />
            <StatCard label="Years Active" value="15+" />
            <StatCard label="Events" value="200+" />
            <StatCard label="Families Supported" value="3000+" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">About KHCWW</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Kirinyaga Healthcare Workers Welfare brings healthcare professionals together to build a stronger, caring, and supportive community.
              </p>
              <div className="space-y-3">
                <p className="text-gray-600"><strong>Our Mission:</strong> Supporting healthcare workers through every journey</p>
                <p className="text-gray-600"><strong>Our Vision:</strong> A united healthcare community with shared growth</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-400 to-secondary-500 h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg"
                alt="Healthcare teamwork"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ObjectiveCard
              title="Unity"
              description="Bringing healthcare professionals together"
              icon="🤝"
            />
            <ObjectiveCard
              title="Support"
              description="Comprehensive member support programs"
              icon="🛡️"
            />
            <ObjectiveCard
              title="Growth"
              description="Professional development and advancement"
              icon="📈"
            />
            <ObjectiveCard
              title="Community"
              description="Building stronger healthcare communities"
              icon="🌍"
            />
            <ObjectiveCard
              title="Empowerment"
              description="Member recognition and celebration"
              icon="⭐"
            />
            <ObjectiveCard
              title="Impact"
              description="Creating measurable positive change"
              icon="💡"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">Programs & Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard title="Member Support Programs" icon="🏥" />
            <ProgramCard title="Professional Networking" icon="🤵" />
            <ProgramCard title="Community Engagement" icon="🌱" />
            <ProgramCard title="Team Building Events" icon="🎯" />
            <ProgramCard title="Leadership Development" icon="👨‍💼" />
            <ProgramCard title="Retirement Recognition" icon="🎖️" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Healthcare Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of a stronger healthcare workforce in Kirinyaga
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gold hover:bg-yellow-500 smooth-transition text-primary-900 px-8 py-4 rounded-lg font-bold">
              Apply for Membership
            </button>
            <button className="border-2 border-white hover:bg-white/10 smooth-transition px-8 py-4 rounded-lg font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="text-center p-8 bg-white rounded-xl shadow-md smooth-transition"
    >
      <p className="text-primary-600 text-sm font-semibold uppercase mb-2">{label}</p>
      <p className="text-4xl font-bold text-primary-900">{value}</p>
    </motion.div>
  );
}

function ObjectiveCard({ title, description, icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md smooth-transition text-center"
    >
      <p className="text-5xl mb-4">{icon}</p>
      <h3 className="text-2xl font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProgramCard({ title, icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-light p-8 rounded-xl shadow-md smooth-transition border-l-4 border-accent-500"
    >
      <p className="text-4xl mb-4">{icon}</p>
      <h3 className="text-xl font-bold text-primary-900">{title}</h3>
    </motion.div>
  );
}
