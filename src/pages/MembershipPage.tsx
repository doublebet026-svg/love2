import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function MembershipPage() {
  return (
    <div className="w-full">
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Membership</h1>
          <p className="text-xl opacity-90">Join our growing community of healthcare professionals</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">Membership Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <BenefitCard
              icon="🛡️"
              title="Comprehensive Support"
              description="Access to welfare programs and member support services"
            />
            <BenefitCard
              icon="📚"
              title="Professional Development"
              description="Training, workshops, and career advancement opportunities"
            />
            <BenefitCard
              icon="🤝"
              title="Networking"
              description="Connect with healthcare professionals across departments"
            />
            <BenefitCard
              icon="🎯"
              title="Community Events"
              description="Participate in team building and social events"
            />
            <BenefitCard
              icon="🏆"
              title="Recognition"
              description="Celebrate achievements and milestones"
            />
            <BenefitCard
              icon="💰"
              title="Financial Security"
              description="Member assistance and emergency support programs"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-light p-12 rounded-xl mb-16"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Eligibility Requirements</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Check className="text-success" size={24} />
                <span>Employed or recently retired healthcare professional in Kirinyaga</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-success" size={24} />
                <span>Valid professional registration/license</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-success" size={24} />
                <span>Commitment to KHCWW values and objectives</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-success" size={24} />
                <span>Membership fee payment</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-12 rounded-xl mb-16"
          >
            <h3 className="text-2xl font-bold mb-6">Membership Process</h3>
            <div className="space-y-4">
              <ProcessStep number="1" title="Complete Application" description="Fill out the membership application form" />
              <ProcessStep number="2" title="Submit Documents" description="Provide required professional documentation" />
              <ProcessStep number="3" title="Verification" description="We verify your information and credentials" />
              <ProcessStep number="4" title="Approval" description="Your membership is approved and activated" />
              <ProcessStep number="5" title="Onboarding" description="Receive welcome materials and access to services" />
            </div>
          </motion.div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Ready to Join?</h3>
            <p className="text-gray-600 mb-6">
              Start your membership application today and become part of our healthcare community
            </p>
            <button className="bg-accent-500 hover:bg-accent-600 smooth-transition text-white px-8 py-4 rounded-lg font-bold text-lg">
              Start Application
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="What is the annual membership fee?"
              answer="Membership fees vary based on employment level and are set by the organization. Contact us for current fee information."
            />
            <FAQItem
              question="How long does the application process take?"
              answer="Typically 2-4 weeks from submission to approval, depending on document verification."
            />
            <FAQItem
              question="Can retired healthcare workers join?"
              answer="Yes, retired healthcare professionals are welcome to join and access member benefits."
            />
            <FAQItem
              question="What happens if I leave my healthcare job?"
              answer="You can maintain membership as an inactive member or transition to retired status depending on circumstances."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md smooth-transition border-t-4 border-accent-500"
    >
      <p className="text-4xl mb-4">{icon}</p>
      <h3 className="text-xl font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, description }: any) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-primary-900">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md smooth-transition cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-primary-900">{question}</h4>
        <span className="text-2xl text-accent-500">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 mt-3"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
}
