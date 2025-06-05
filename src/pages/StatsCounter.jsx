import React, { useEffect, useState } from 'react';
import { FaBoxOpen, FaSearch, FaCheckCircle ,FaChartBar} from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const duration = 8000; 
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-t-4 w-full sm:w-60 ${color}`}
    >
      <Icon className="text-4xl mb-3" />
      <h2 className="text-3xl font-bold">{count}</h2>
      <p className="text-gray-700 font-semibold mt-1">{label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 bg-white">
       <div className="mb-12 px-4">
        <div className="flex justify-center items-center gap-2 text-blue-700 text-4xl font-bold">
          <FaChartBar className="text-yellow-400 text-5xl" />
          <h2> Live Stats</h2>
        </div>
        <p className="text-center text-lg md:text-xl text-yellow-700 max-w-2xl mx-auto mb-6 mt-4">
          Real-time numbers of Lost, Found, and Successfully Returned items.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-6">
        <StatCard
          icon={FaBoxOpen}
          label="Lost Items"
          target="1021"
          color="border-yellow-400 text-yellow-500 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
        />
        <StatCard
          icon={FaSearch}
          label="Found Items"
          target="733"
          color="border-blue-500 text-blue-600 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
        />
        <StatCard
          icon={FaCheckCircle}
          label="Successfully Returned"
          target="645"
          color="border-green-500 text-green-600 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
        />
      </div>
    </section>
  );
};

export default StatsCounter;
