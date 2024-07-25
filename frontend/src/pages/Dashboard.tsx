import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import NavBar from '../components/NavBar';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = (id: string) => {
    setProducts(products.filter(product => product._id !== id));
  };

  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <h2>Hashers MarketPlace</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
