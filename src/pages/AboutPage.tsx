import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About KHCWW</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-light p-12 rounded-xl mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kirinyaga Healthcare Workers Welfare (KHCWW) is a registered welfare organization dedicated to supporting healthcare professionals across Kirinyaga County. We unite healthcare workers from various departments to build a stronger, more supportive community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To support healthcare workers through every journey, providing comprehensive welfare programs, professional growth opportunities, and a unified community that celebrates achievements and supports members through challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To build a united, empowered healthcare community in Kirinyaga where professionals experience shared growth, mutual support, recognition, and opportunities for advancement in a culture of trust and excellence.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-12 rounded-xl mb-16"
          >
            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ValueItem title="Integrity" description="Honest and ethical practices in all actions" />
              <ValueItem title="Unity" description="Strength through collective effort and cooperation" />
              <ValueItem title="Excellence" description="Commitment to highest professional standards" />
              <ValueItem title="Compassion" description="Empathy and support for all members" />
              <ValueItem title="Transparency" description="Open communication and accountability" />
              <ValueItem title="Growth" description="Continuous learning and development" />
            </div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-primary-900 mb-8">Our Journey</h3>
            <div className="space-y-6">
              <TimelineItem year="2009" title="Foundation" description="KHCWW established to support healthcare workers" />
              <TimelineItem year="2015" title="Expansion" description="Grew to include representatives from all major departments" />
              <TimelineItem year="2019" title="Recognition" description="Official registration as welfare organization" />
              <TimelineItem year="2024" title="Evolution" description="Enhanced programs and community outreach initiatives" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueItem({ title, description }: any) {
  return (
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="opacity-90">{description}</p>
    </div>
  );
}

function TimelineItem({ year, title, description }: any) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex gap-6 pb-6 border-b border-gray-200 smooth-transition"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-500 text-white font-bold">
          {year.slice(-2)}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-primary-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
