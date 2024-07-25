import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductForm.css';

const AddProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        name,
        price: parseFloat(price as string),
        description
      });

      if (response.status === 201) {
        setMessage('Product added successfully');
        // Clear the form
        setName('');
        setPrice('');
        setDescription('');
        // Optionally reload products or redirect to another page
        window.location.reload();
      }
    } catch (err) {
      console.error('Error adding product:', err);
      setMessage('Error adding product');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Product</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default AddProductForm;
