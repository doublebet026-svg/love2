import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-primary-900 mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <ContactInfoCard
                  icon={<Mail className="text-accent-500" size={24} />}
                  title="Email"
                  content="info@khcww.org"
                  subtitle="Send us an email anytime"
                />
                <ContactInfoCard
                  icon={<Phone className="text-accent-500" size={24} />}
                  title="Phone"
                  content="+254 (0) XXX XXX XXX"
                  subtitle="Available during business hours"
                />
                <ContactInfoCard
                  icon={<MapPin className="text-accent-500" size={24} />}
                  title="Address"
                  content="Kirinyaga County, Kenya"
                  subtitle="Healthcare Workers Hub"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 p-8 bg-white rounded-xl shadow-md border-l-4 border-accent-500"
              >
                <h3 className="font-bold text-primary-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-success mb-2">Thank you!</h4>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500"
                      placeholder="+254 (0) XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="event">Event Information</option>
                      <option value="support">Member Support</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-500 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 smooth-transition text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="KHCWW Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63831.04819387046!2d37.25!3d-0.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289e8e8e8e8e8d%3A0x8e8e8e8e8e8e8e8e!2sKirinyaga!5e0!3m2!1sen!2ske!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({ icon, title, content, subtitle }: any) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex gap-4 smooth-transition"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-primary-900 text-lg mb-1">{title}</h4>
        <p className="text-gray-700 font-semibold mb-1">{content}</p>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );
}
