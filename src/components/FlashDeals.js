// FlashDeals Component
import React from "react";
import "./FlashDeals.css";

const FlashDeals = () => {
  const deals = [
    { id: 1, title: "Phone", image: "photos/OIP.jpg", price: "12000" },
    { id: 2, title: "Mixer", image: "photos/mixer.jpg", price: "4000" },
    { id: 3, title: "Headphones", image: "photos/headphone.jpg", price: "550" },
    { id: 4, title: "Laptop", image: "photos/laptopp.jpg", price: "30000" },
    { id: 5, title: "SmartWatch", image: "photos/watch.jpg", price: "2000" },
  ];

  const addToCart = (deal) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(deal);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${deal.title} added to cart!`);
  };

  return (
    <section className="flash-deals">
      <h2>Flash Deals</h2>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <img src={deal.image} alt={deal.title} />
            <p>{deal.title}</p>
            <p>{deal.price} $</p>
            <button onClick={() => addToCart(deal)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashDeals;