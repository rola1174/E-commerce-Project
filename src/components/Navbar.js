import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/products?category=Electronics">Electronics</a></li>
        <li><a href="/products?category=Fashion">Fashion</a></li>
        <li><a href="/products?category=Books">Books</a></li>
        <li><a href="/products?category=Sports">Sports</a></li>
        <li><a href="/products?category=Perfumes">Perfumes</a></li>
        <li><a href="/Products">All Products</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
