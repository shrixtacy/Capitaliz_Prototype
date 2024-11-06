import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const startups = [
  {
    name: 'GreenTech Solutions',
    category: 'CleanTech',
    stage: 'Series A',
    raised: '$2.5M',
    target: '$5M',
    description: 'Developing next-generation solar energy storage solutions',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'HealthAI',
    category: 'HealthTech',
    stage: 'Seed',
    raised: '$800K',
    target: '$1.5M',
    description: 'AI-powered preventive healthcare platform',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'CyberShield',
    category: 'Cybersecurity',
    stage: 'Pre-seed',
    raised: '$300K',
    target: '$750K',
    description: 'Next-generation endpoint security solution',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Startups() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Featured Startups
          </h1>
          <p className="text-xl text-gray-600">
            Discover promising startups actively raising funds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group"
            >
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-indigo-600">
                    {startup.category}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {startup.stage}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {startup.name}
                </h3>
                <p className="text-gray-600 mb-4">{startup.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Raised: {startup.raised}</p>
                    <p className="text-sm text-gray-500">Target: {startup.target}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}