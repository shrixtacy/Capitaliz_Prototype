import { motion, useInView } from 'framer-motion';
import { Search, HandshakeIcon, BarChart3, Shield } from 'lucide-react';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const features = [
  {
    name: 'Smart Matching',
    description: 'Our AI-powered algorithm connects you with the most relevant opportunities based on your criteria.',
    icon: Search,
  },
  {
    name: 'Secure Deals',
    description: 'End-to-end encrypted communication and secure document sharing for confidential dealings.',
    icon: Shield,
  },
  {
    name: 'Easy Collaboration',
    description: 'Built-in tools for due diligence, term sheet negotiation, and deal closure.',
    icon: HandshakeIcon,
  },
  {
    name: 'Performance Tracking',
    description: 'Real-time analytics and reporting to monitor your investment portfolio or startup metrics.',
    icon: BarChart3,
  },
];

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold leading-7 text-indigo-600"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to succeed
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Our platform streamlines the investment process from discovery to deal closure,
            making it easier than ever to find and secure the right opportunities.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <animated.div
                key={feature.name}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                  transform: props.xys.to(trans),
                }}
                className="relative group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="flex flex-col bg-white rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors"
                    >
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </animated.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}