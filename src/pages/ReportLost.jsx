import { useState } from 'react';
import axios from 'axios';

export default function ReportLost() {
  const [form, setForm] = useState({ title: '', description: '', location: '', userEmail: '' });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8080/api/items/upload', formData);
      alert('Item reported successfully!');
    } catch (err) {
      alert('Upload failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Report Lost Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" onChange={handleChange} className="w-full border p-2" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2" required></textarea>
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full border p-2" required />
        <input name="userEmail" placeholder="Your Email" onChange={handleChange} className="w-full border p-2" required />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full" required />
        <button type="submit" className="bg-teal-600 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
