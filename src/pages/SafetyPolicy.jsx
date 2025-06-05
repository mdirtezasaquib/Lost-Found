import React from 'react';
import { FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: FaLock,
    title: "Data Encryption",
    desc: "All your personal information is protected using secure encryption methods.",
    bg: "bg-gradient-to-br from-blue-100 to-blue-50 border-blue-500",
    align: "sm:col-span-2 sm:flex-row-reverse",
  },
  {
    icon: FaUserSecret,
    title: "User Privacy",
    desc: "We never share your data. Your actions are completely anonymous and safe.",
    bg: "bg-gradient-to-br from-green-100 to-green-50 border-green-500",
    align: "sm:col-span-1",
  },
  {
    icon: FaShieldAlt,
    title: "Safe Platform",
    desc: "Monitored and moderated to prevent misuse. Your safety is our priority.",
    bg: "bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-500",
    align: "sm:col-span-1 sm:flex-row",
  },
];

const SafetyCard = ({ icon: Icon, title, desc, bg, align }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
    className={`rounded-xl border-t-4 shadow-lg p-6 flex flex-col sm:flex-row gap-6 ${bg} ${align}`}
  >
    <div className="flex-shrink-0 flex items-center justify-center">
      <Icon className="text-5xl text-gray-700" />
    </div>
    <div
      className={`flex-1 ${
        align.includes('flex-row-reverse')
          ? 'text-center sm:text-center'
          : 'text-center sm:text-left'
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </motion.div>
);

const SafetyPolicy = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-700 flex items-center justify-center gap-3">
          <FaShieldAlt className="text-yellow-500 text-5xl" />
          Safety & Privacy First
        </h2>
        <p className="mt-4 text-lg md:text-xl text-yellow-700 max-w-2xl mx-auto">
          Your security is our top concern. Here's how we ensure complete protection.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <SafetyCard
            key={index}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            bg={card.bg}
            align={card.align}
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyPolicy;
