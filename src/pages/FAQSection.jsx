import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "Is it safe to share my number?",
    answer:
      "Yes, your contact number is only shared with the relevant party and kept private from the public. We prioritize your safety at every step.",
  },
  {
    question: "What proof is needed to claim?",
    answer:
      "You may be asked to provide identity verification, a receipt, or a related document depending on the type of post or claim.",
  },
  {
    question: "Can I edit my post after submission?",
    answer:
      "Absolutely. You can log in to your account and make changes to your posts anytime.",
  },
  {
    question: "Is there any moderation of content?",
    answer:
      "Yes, all posts go through a moderation process to ensure safety, authenticity, and compliance with our community guidelines.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left group"
    >
      <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition">
        {faq.question}
      </span>
      <FaChevronDown
        className={`text-gray-500 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-blue-600" : ""
        }`}
      />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden pb-4 pr-6 text-gray-600"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">FAQs</h2>
        <p className="mt-4 text-lg md:text-xl text-yellow-700">
          Find quick answers to your most common questions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
