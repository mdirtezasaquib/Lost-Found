import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FaCheckCircle,
    title: "100% Free to Use",
    description: "No hidden charges or premium fees. Use all features at zero cost.",
    accent: "text-blue-600",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location-based Matching",
    description: "Find relevant connections and services near your location.",
    accent: "text-green-600",
  },
  {
    icon: FaShieldAlt,
    title: "Verified Posts",
    description: "Each post goes through a verification process for authenticity.",
    accent: "text-yellow-600",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Get help and share experiences with a helpful community.",
    accent: "text-purple-600",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
          What Makes Us Different
        </h2>
        <p className="mt-4 text-base sm:text-lg text-yellow-600 max-w-2xl mx-auto">
          We offer more than just features – we build trust, community, and true value.
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 ${
              index % 2 === 0 ? '' : 'sm:flex-row-reverse'
            }`}
          >
            <div className={`text-4xl sm:text-5xl ${feature.accent} shrink-0`}>
              <feature.icon />
            </div>
            <div className="text-center sm:text-left max-w-full sm:max-w-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
