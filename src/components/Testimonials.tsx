import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "This platform has transformed how we connect with investors. We raised our Series A in record time!",
    author: "Sarah Chen",
    role: "CEO, TechVision AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The quality of startups and the streamlined due diligence process makes this platform invaluable for VCs.",
    author: "Michael Ross",
    role: "Partner, Horizon Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "We've discovered incredible investment opportunities that we wouldn't have found otherwise.",
    author: "Lisa Wang",
    role: "Angel Investor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Trusted by Leading Investors and Startups
          </motion.h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.image}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}