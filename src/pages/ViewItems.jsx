import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/items')
      .then(res => setItems(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="border rounded p-4 shadow">
          <img src={`http://localhost:8080/api/items/image/${item.imageName}`} alt={item.title} className="h-40 w-full object-cover mb-2" />
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.location}</p>
          <Link to={`/item/${item.id}`} className="text-teal-600 mt-2 inline-block">View Details</Link>
        </div>
      ))}
    </div>
  );
}