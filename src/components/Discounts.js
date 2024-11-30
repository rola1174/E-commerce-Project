import React from "react";
import "./Discounts.css";


const Discounts = () => {
  return (
    <section className="discounts">
      <h2>Discounts & Offers</h2>
      <div className="discounts-grid">
        <div className="discount-card">MasterCard 10% Off</div>
        <div className="discount-card">Vodafone 100 EGP Off</div>
        <div className="discount-card">Installment Plans</div>
      </div>
    </section>
  );
};

export default Discounts;
