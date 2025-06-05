import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaApple } from 'react-icons/fa';
import mockup1 from '../assets/final1.jpg';
import mockup2 from '../assets/final2.jpg';

const AppPromo = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center w-full lg:w-1/2"
        >
          <img
            src={mockup1}
            alt="App Screenshot 1"
            className="w-[150px] sm:w-[180px] lg:w-[210px] rounded-2xl transform rotate-[-8deg] z-10"
          />
          <img
            src={mockup2}
            alt="App Screenshot 2"
            className="w-[150px] sm:w-[180px] lg:w-[210px] rounded-2xl transform rotate-[8deg] -ml-10 z-0"
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-blue-700 mb-6 leading-tight">
            Get the App Now
          </h2>
          <p className="text-yellow-700 text-lg sm:text-xl mb-10 leading-relaxed">
            Your Lost & Found companion – right in your pocket. Post or claim items instantly with our fast and secure mobile app.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-6 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaAndroid className="text-xl" /> Android
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold text-base px-6 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaApple className="text-xl" /> iOS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPromo;
