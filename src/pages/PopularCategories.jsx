import React from "react";
import {
  FaMobileAlt,
  FaWallet,
  FaIdCard,
  FaGem,
  FaLaptop,
  FaBriefcase,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Phones", icon: <FaMobileAlt /> },
  { id: 2, name: "Wallets", icon: <FaWallet /> },
  { id: 3, name: "ID Proofs", icon: <FaIdCard /> },
  { id: 4, name: "Jewelry", icon: <FaGem /> },
  { id: 5, name: "Laptops", icon: <FaLaptop /> },
  { id: 6, name: "Bags", icon: <FaBriefcase /> },
];

const PopularCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-3">
          Popular Categories
        </h2>
        <p className="text-yellow-700 text-lg mb-10">
          Browse the most commonly reported items
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map(({ id, name, icon }) => (
            <div
              key={id}
              className=" rounded-3xl shadow-lg p-6 flex flex-col items-center cursor-pointer
                         hover:shadow-yellow-400/50 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
            >
              <div
                className="text-yellow-500 text-6xl mb-4
                           group-hover:text-blue-600 transition-colors duration-300"
              >
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
