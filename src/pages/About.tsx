import { motion } from 'framer-motion';
import { Target, Users, Shield, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Users', value: '10,000+' },
  { icon: Shield, label: 'Successful Deals', value: '500+' },
  { icon: Target, label: 'Total Investment', value: '$100M+' },
  { icon: Globe, label: 'Countries', value: '30+' }
];

export default function About() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About CapitaliZ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize access to startup funding and make the investment process more efficient and transparent.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2024, CapitaliZ was born from the realization that the traditional startup funding process was broken. Too many great ideas were going unfunded while investors struggled to find quality opportunities.
            </p>
            <p className="text-gray-600">
              We built CapitaliZ to bridge this gap, creating a platform that uses technology to make startup funding more efficient, transparent, and accessible to all qualified participants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-indigo-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm">1</div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Transparency</h4>
                  <p className="text-gray-600">We believe in complete transparency in all dealings</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm">2</div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Innovation</h4>
                  <p className="text-gray-600">Constantly improving our platform and processes</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm">3</div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Community</h4>
                  <p className="text-gray-600">Building a supportive ecosystem for all participants</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}