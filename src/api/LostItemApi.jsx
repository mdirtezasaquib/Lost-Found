import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/items'; // ✅ Change if deployed

// Upload a lost item with image
export const uploadLostItem = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Upload failed');
  }
};

// Get all lost items
export const getAllItems = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to fetch items');
  }
};

// Get item details by ID
export const getItemById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || 'Failed to fetch item');
  }
};

// Get item image by image name
export const getItemImage = (imageName) => {
  return `${BASE_URL}/image/${imageName}`;
};
