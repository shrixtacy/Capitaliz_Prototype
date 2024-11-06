import { motion } from 'framer-motion';
import { Building2, Briefcase, Users2 } from 'lucide-react';

const investorTypes = [
  {
    icon: Building2,
    title: 'Venture Capital',
    description: 'Leading VC firms looking for high-growth opportunities',
    count: '200+'
  },
  {
    icon: Users2,
    title: 'Angel Investors',
    description: 'Experienced angels ready to back promising startups',
    count: '500+'
  },
  {
    icon: Briefcase,
    title: 'Corporate Investors',
    description: 'Strategic corporate investors seeking innovation',
    count: '100+'
  }
];

export default function Investors() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Investor Network
          </h1>
          <p className="text-xl text-gray-600">
            Connect with top-tier investors actively looking for opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {investorTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg text-center"
            >
              <type.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <p className="text-2xl font-bold text-indigo-600">{type.count}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Investor Network
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get early access to vetted startup opportunities and connect with other investors
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
              Apply to Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}