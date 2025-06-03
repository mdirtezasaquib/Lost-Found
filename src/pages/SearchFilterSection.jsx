import React from "react";
import { FaSearch, FaFilter, FaMapMarkerAlt, FaCalendarAlt, FaBoxOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchFilterSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
      >
        <div className="flex items-center justify-center gap-3 mb-8 text-blue-700 ">
          <FaSearch className="text-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Search Lost & Found Items
          </h2>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search by item name..."
              className="w-full outline-none text-gray-700"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 flex items-center gap-2 justify-center">
            <FaSearch />
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category */}
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaBoxOpen className="text-gray-500 mr-3" />
            <select className="w-full outline-none text-gray-700 bg-transparent">
              <option value="">Item Category</option>
              <option value="wallet">Wallet</option>
              <option value="id">ID Card</option>
              <option value="phone">Phone</option>
              <option value="keys">Keys</option>
              <option value="bag">Bag</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaMapMarkerAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Date */}
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaCalendarAlt className="text-gray-500 mr-3" />
            <input
              type="date"
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Filter Button */}
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:underline flex items-center justify-center gap-2 font-medium">
            <FaFilter />
            Advanced Filters
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SearchFilterSection;
