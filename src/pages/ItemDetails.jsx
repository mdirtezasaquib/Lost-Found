import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/items/${id}`)
      .then(res => setItem(res.data));
  }, [id]);

  if (!item) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <img src={`http://localhost:8080/api/items/image/${item.imageName}`} alt={item.title} className="w-full h-60 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
      <p className="mb-2">{item.description}</p>
      <p className="text-gray-600">Found at: {item.location}</p>
      <p className="text-sm text-gray-500 mt-4">Posted by: {item.userEmail}</p>
    </div>
  );
}