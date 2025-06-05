import React, { useState } from "react";
import { HiStatusOnline } from "react-icons/hi";
import axios from "axios";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,  
  FaBoxOpen,
  FaInfoCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SearchFilterSection = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const API_URL = "http://localhost:8080/api/items/search"; 

  const handleSearch = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: { name, category, location, date },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
      >
        <div className="flex items-center justify-center gap-3 mb-8 text-blue-700">
          <FaSearch className="text-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Search Lost & Found Items
          </h2>
        </div>


        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search by item name..."
              className="w-full outline-none text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300 flex items-center gap-2 justify-center"
          >
            <FaSearch />
            Search
          </button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaBoxOpen className="text-gray-500 mr-3" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full outline-none text-gray-700 bg-transparent"
            >
              <option value="">Item Category</option>
              <option value="wallet">Wallet</option>
              <option value="id">ID Card</option>
              <option value="phone">Phone</option>
              <option value="keys">Keys</option>
              <option value="bag">Bag</option>
            </select>
          </div>

          
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaMapMarkerAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none text-gray-700"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm">
            <FaCalendarAlt className="text-gray-500 mr-3" />
            <input
              type="date"
              className="w-full outline-none text-gray-700"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:underline flex items-center justify-center gap-2 font-medium">
            <FaFilter />
            Advanced Filters
          </button>
        </div>
      </motion.div>

     {results.length > 0 && (
  <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {results.map((item) => (
      <div
        key={item.id}
        className="bg-gradient-to-br from-white via-blue-50 to-white border border-blue-100 rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={item.imageUrl}
          alt={item.itemName}
          className="w-full h-52 object-cover rounded-t-3xl"
        />

        <div className="p-5 space-y-3">
    
          <h3 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
            <FaInfoCircle className="text-blue-500" />
            {item.itemName}
          </h3>

          <p className="text-gray-600">{item.description}</p>

          
          <div className="flex flex-col gap-1 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              {item.location}
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-green-600" />
              {item.date}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
            <HiStatusOnline className="text-purple-600" />
            {item.status}
          </div>
        </div>
      </div>
    ))}
  </div>
)}
    </section>
  );
};

export default SearchFilterSection;
