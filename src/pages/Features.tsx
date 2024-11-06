import { motion } from 'framer-motion';
import { Shield, Rocket, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with end-to-end encryption for all communications and transactions.'
  },
  {
    icon: Rocket,
    title: 'Quick Matching',
    description: 'Advanced AI algorithms match startups with the most relevant investors based on multiple criteria.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting tools to track your investments and startup metrics.'
  },
  {
    icon: Users,
    title: 'Network Access',
    description: 'Connect with a vast network of verified investors, startups, and industry experts.'
  }
];

export default function Features() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in the startup ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}