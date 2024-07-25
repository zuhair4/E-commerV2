import React from 'react';
import axios from 'axios';
import { Product } from '../types/Product';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${product._id}`);
      onDelete(product._id); // Notify parent component
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div className="product-card">
      <img src={`http://placehold.it/300x200?text=${product.name}`} alt={product.name} />
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
