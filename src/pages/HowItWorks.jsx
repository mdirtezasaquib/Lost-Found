import React from "react";
import { FaUserShield, FaBullhorn, FaHandshake, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUserShield className="text-blue-600 text-4xl mb-4" />,
    title: "Register / Login",
    description: "Create your account to start your journey with trust and safety.",
  },
  {
    icon: <FaBullhorn className="text-yellow-500 text-4xl mb-4" />,
    title: "Post Lost / Found",
    description: "Report your lost or found item with clear details and photos.",
  },
  {
    icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
    title: "Match & Connect",
    description: "Smart filters and community help to match lost items with their owners.",
  },
  {
    icon: <FaSmile className="text-yellow-500 text-4xl mb-4" />,
    title: "Return with Trust",
    description: "Safely return the item and earn appreciation from the community.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          How It Works
        </h2>
        <p className="text-yellow-700 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          A simple and secure 4-step process to get your items back or help others.
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
