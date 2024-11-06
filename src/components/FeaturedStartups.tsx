import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const startups = [
  {
    name: 'EcoTech Solutions',
    description: 'Revolutionary sustainable energy storage technology',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    category: 'CleanTech',
    raised: '$2.5M'
  },
  {
    name: 'HealthAI',
    description: 'AI-powered preventive healthcare platform',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    category: 'HealthTech',
    raised: '$3.8M'
  },
  {
    name: 'FinFlow',
    description: 'Next-gen financial management for SMEs',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    category: 'FinTech',
    raised: '$1.7M'
  }
];

export default function FeaturedStartups() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Startups</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover some of the innovative startups currently raising funds on our platform
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {startups.map((startup, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-start group cursor-pointer"
            >
              <div className="relative w-full">
                <img
                  src={startup.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023" className="text-gray-500">Actively Raising</time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {startup.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {startup.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{startup.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      Raised: {startup.raised}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-6 w-6 text-gray-600" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}