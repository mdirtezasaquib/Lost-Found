import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExclamationTriangle, FaHandHoldingHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import SearchFilterSection from '../pages/SearchFilterSection';
import HowItWorks from '../pages/HowItWorks';
import LostFoundList from '../pages/LostFoundList';
import PopularCategories from '../pages/PopularCategories';
import SuccessStories from '../pages/SucessStories';
import StatsCounter from '../pages/StatsCounter';
import SafetyPolicy from '../pages/SafetyPolicy';
import WhatMakesUsDifferent from '../pages/WhatMakesUsDifferent';
import FAQSection from '../pages/FAQSection';

const HeroSection = () => {
  const navigate = useNavigate(); 

  return (
    <div>
    
      <section
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 opacity-90"></div>
        <div className="absolute bottom-6 w-full flex justify-center z-10">
          <div className="animate-bounce text-white text-2xl">▼</div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-[calc(100vh-80px)] text-center px-4 ">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 max-w-4xl mt-20"
          >
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-xl">
              Lost or Found Something? <br />
              <span className="text-yellow-400">
                Let’s Reunite with Purpose.
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              A smart way to report, find, and track lost items in your city. Help others while helping yourself.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => navigate('/report-lost')}
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
              >
                <FaExclamationTriangle />
                Report Lost
              </button>
              <button
                onClick={() => navigate('/report-found')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
              >
                <FaHandHoldingHeart />
                Report Found
              </button>
              <button
                onClick={() => navigate('/search')}
                className="flex items-center gap-2 bg-white text-blue-600 hover:text-white hover:bg-blue-600 px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
              >
                <FaSearch />
                Search Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <SearchFilterSection />
      <HowItWorks />
      <LostFoundList />
      <PopularCategories />
      <SuccessStories />
      <StatsCounter/>
      <SafetyPolicy/>
      <WhatMakesUsDifferent/>
      <FAQSection/>
    </div>
  );
};

export default HeroSection;
