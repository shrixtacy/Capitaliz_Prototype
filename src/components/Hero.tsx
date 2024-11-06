import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Rocket, Shield, Users } from 'lucide-react';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.to(trans),
            }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
              Where{' '}
              <span className="relative whitespace-nowrap text-indigo-600">
                <motion.span
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-indigo-200"
                />
                <span className="relative">great ideas</span>
              </span>{' '}
              meet smart capital
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
              Connect with vetted investors and promising startups in our exclusive matchmaking platform.
              Turn visionary ideas into successful ventures.
            </p>
          </animated.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center gap-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#get-started"
            className="group relative inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 hover:text-slate-100 active:bg-indigo-800 active:text-slate-300 focus-visible:outline-indigo-600 overflow-hidden"
          >
            <motion.span
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700"
            />
            <span className="relative">Get started</span>
            <ArrowRight className="relative ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#learn-more"
            className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          >
            Learn more
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-36 lg:mt-44"
        >
          <ul className="flex items-center justify-center gap-x-8 sm:gap-x-16 xl:gap-x-24">
            {[
              { Icon: Users, label: 'Active Users', value: '10k+' },
              { Icon: Rocket, label: 'Funds Raised', value: '$500M+' },
              { Icon: Shield, label: 'Vetted Investors', value: '100%' },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <item.Icon className="h-8 w-8 text-indigo-600 transition-transform group-hover:scale-110" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="mt-3"
                  >
                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                    <p className="text-sm text-slate-600">{item.label}</p>
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-br from-indigo-50 via-white to-indigo-50 rounded-full transform rotate-45" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-indigo-100/[0.03] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      </motion.div>
    </div>
  );
}