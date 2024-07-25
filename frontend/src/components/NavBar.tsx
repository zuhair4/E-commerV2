import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/add-product" className="nav-link">Add Product</Link>
    </nav>
  );
};

export default NavBar;
