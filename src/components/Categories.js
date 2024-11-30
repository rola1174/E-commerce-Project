// Categories Component
import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { id: 1, name: "Milwaukee 2730-80 M18 FUEL 18V 6-1/2", image: "photos/elecs.webp", price: "3000" },
    { id: 2, name: "Luxury branded bags", image: "photos/Luxury branded bags.webp", price: "1000" },
    { id: 3, name: "The Anatomy of a Book Cover: A Guide for Authors", image: "photos/book1.jpg", price: "2000" },
    { id: 4, name: "Apple iPhone 12 Pro Max 128GB Unlocked - Excellent", image: "photos/Appple.webp", price: "4000" },
  ];

  const addToCart = (category) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(category);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${category.name} added to cart!`);
  };

  return (
    <section className="categories">
      <h2>Explore Popular Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
            <p>{category.price} $</p>
            <button onClick={() => addToCart(category)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
