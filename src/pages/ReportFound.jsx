import React, { useState } from "react";
import axios from "axios";

const ReportFound = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    image: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:8080/api/found", formData);
      setSuccessMsg("Found item reported successfully!");
      setErrorMsg("");
      setFormData({
        name: "",
        description: "",
        location: "",
        date: "",
        image: "",
      });
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      setSuccessMsg("");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Report a Found Item
        </h2>

        {successMsg && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Item Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g., Samsung Phone"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Short description of the found item"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Location Found</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g., Green Park Metro Station"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date Found</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Direct image link"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition duration-300"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportFound;
