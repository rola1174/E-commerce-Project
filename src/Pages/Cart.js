import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const isItemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    if (isItemInCart(item.id)) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If item doesn't exist, add the new item with quantity 1
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleStartShopping = () => {
    navigate("/Products"); 
  };

  const handleOrderNow = (item) => {
    navigate("/Order", { state: { item } }); 
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
  
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty. Start shopping!</p>
          <button className="btnsa" onClick={handleStartShopping}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                <strong>{item.name}</strong> - Price: {item.price}
              </p>
              <div className="quantity-controls">
                <button class ="ms" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button class ="ad"onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="rmv" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
              <button className="or-quantity" onClick={() => handleOrderNow(item)}>
                Order Now
              </button>
            </div>
          ))}
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )};
  export default CartPage;
  