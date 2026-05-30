import { motion } from 'framer-motion';

export default function LeadershipPage() {
  return (
    <div className="w-full">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Leadership</h1>
          <p className="text-xl opacity-90">Dedicated professionals serving our community</p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LeadershipCard
              name="Leadership Team"
              title="Chairperson"
              description="Guiding our organization with vision and excellence"
            />
            <LeadershipCard
              name="Leadership Team"
              title="Vice Chairperson"
              description="Supporting organizational growth and initiatives"
            />
            <LeadershipCard
              name="Leadership Team"
              title="Secretary"
              description="Ensuring transparent communication"
            />
            <LeadershipCard
              name="Leadership Team"
              title="Vice Secretary"
              description="Supporting administrative functions"
            />
            <LeadershipCard
              name="Leadership Team"
              title="Treasurer"
              description="Managing financial integrity and accountability"
            />
            <LeadershipCard
              name="Leadership Team"
              title="Patron"
              description="Honoring our organization's legacy"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Leadership Philosophy</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-light p-12 rounded-xl"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our leadership is committed to serving the healthcare workers of Kirinyaga with integrity, transparency, and dedication. We believe in:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold">•</span>
                <span>Collaborative decision-making that values input from all stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold">•</span>
                <span>Accountability to our members and the broader healthcare community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold">•</span>
                <span>Continuous improvement and adaptation to member needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-500 font-bold">•</span>
                <span>Transparent financial management and resource allocation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function LeadershipCard({ name, title, description }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg smooth-transition"
    >
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-48 flex items-center justify-center">
        <p className="text-6xl">👤</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-1">{title}</h3>
        <p className="text-accent-600 font-semibold mb-3">{name}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
