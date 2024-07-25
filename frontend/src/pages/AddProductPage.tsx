import React from 'react';
import ProductForm from '../components/ProductForm';
import Navbar from '../components/NavBar';
// import '../styles/AddProductPage.css';

const AddProductPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="add-product-page-container">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
