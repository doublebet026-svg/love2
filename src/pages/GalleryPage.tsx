import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl opacity-90">
            Capturing moments of unity, growth, and community
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <GalleryCard
              title="Team Building Events"
              description="Memorable moments of unity and bonding"
              icon="🎉"
              color="from-blue-400"
            />
            <GalleryCard
              title="Training & Workshops"
              description="Professional development activities"
              icon="📚"
              color="from-green-400"
            />
            <GalleryCard
              title="Healthcare Outreach"
              description="Community health initiatives"
              icon="🏥"
              color="from-red-400"
            />
            <GalleryCard
              title="Leadership Events"
              description="Our leadership in action"
              icon="👔"
              color="from-purple-400"
            />
            <GalleryCard
              title="Award Ceremonies"
              description="Celebrating achievements"
              icon="🏆"
              color="from-yellow-400"
            />
            <GalleryCard
              title="Member Celebrations"
              description="Special moments and milestones"
              icon="🎊"
              color="from-pink-400"
            />
          </div>

          {/* Main Gallery Embed Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 text-center">
                Kirinyaga Healthcare Workers Welfare Gallery
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Explore our complete photo collection showcasing the moments and memories of our healthcare community
              </p>

              {!showEmbed && (
                <div className="text-center">
                  <button
                    onClick={() => setShowEmbed(true)}
                    className="bg-primary-600 hover:bg-primary-700 smooth-transition text-white px-8 py-4 rounded-lg font-bold text-lg mb-4"
                  >
                    View Full Gallery
                  </button>
                  <p className="text-gray-500 text-sm">Click above to load the interactive gallery</p>
                </div>
              )}

              {showEmbed && (
                <div className="relative">
                  <button
                    onClick={() => setShowEmbed(false)}
                    className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-white smooth-transition p-2 rounded-full"
                  >
                    <X size={24} className="text-gray-800" />
                  </button>
                  <iframe
                    src="https://ianphotography94.pixieset.com/kirinyagahealthcareworkerswelfareagmandteambuildinggallery/"
                    title="Kirinyaga Healthcare Workers Welfare Gallery"
                    className="w-full h-[800px] md:h-[1000px] rounded-xl border-0"
                    allow="fullscreen"
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* Gallery Highlights */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary-900 mb-8">Gallery Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <HighlightCard
                title="AGM & Team Building"
                description="Annual General Meeting combined with team building activities strengthening our community bonds"
              />
              <HighlightCard
                title="Professional Development"
                description="Healthcare workers engaging in continuous learning and skill development programs"
              />
              <HighlightCard
                title="Community Outreach"
                description="Our organization's commitment to serving the broader healthcare community"
              />
              <HighlightCard
                title="Departmental Achievements"
                description="Celebrating the outstanding work of our various healthcare departments"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ title, description, icon, color }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-gradient-to-br ${color} to-opacity-50 rounded-xl p-8 shadow-lg smooth-transition text-white cursor-pointer`}
    >
      <p className="text-5xl mb-4">{icon}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </motion.div>
  );
}

function HighlightCard({ title, description }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent-500 smooth-transition"
    >
      <h4 className="text-xl font-bold text-primary-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
