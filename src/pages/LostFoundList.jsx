import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    type: "Lost",
    name: "Leather Wallet",
    description: "Black wallet with multiple cards and ID.",
    location: "Delhi Metro Station",
    date: "2025-06-01",
    image: "https://www.indianleathercraft.com/cdn/shop/collections/20191126-094403.jpg?v=1586101467&width=1500",
  },
  {
    id: 2,
    type: "Found",
    name: "Samsung Phone",
    description: "Found a blue Samsung Galaxy near park bench.",
    location: "Green Park, Delhi",
    date: "2025-05-30",
    image: "https://images.samsung.com/is/image/samsung/assets/az/2407/pfs/04-02-ft12-B6-interpreter-mo-720x540.jpg?$720_N_JPG$",
  },
  {
    id: 3,
    type: "Lost",
    name: "College ID Card",
    description: "AIIMS student ID card, name: R. Verma.",
    location: "AIIMS Library",
    date: "2025-06-01",
    image: "https://as1.ftcdn.net/v2/jpg/05/21/49/22/1000_F_521492250_BVw0LUDjuSxa3DmKy6qBZXZ0UqiDlekf.jpg",
  },
];

const LostFoundList = () => {
  return (
    <section className="bg-white py-20 px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Lost & Found Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative bg-white backdrop-blur-xl rounded-3xl shadow-lg border border-blue-100 hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100"
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full z-10 ${
                item.type === 'Lost'
                  ? 'bg-yellow-400 text-yellow-900'
                  : 'bg-blue-600 text-white'
              }`}>
                {item.type}
              </div>

              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-blue-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt className="text-yellow-500" />
                  <span>{item.date}</span>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap gap-3">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl text-sm font-medium transition-all shadow">
                    View
                  </button>
                  {item.type === 'Found' ? (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow">
                      Claim
                    </button>
                  ) : (
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow">
                      Contact
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LostFoundList;
