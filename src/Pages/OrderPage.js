import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderPage.css";

const OrderPage = () => {
  const { state } = useLocation(); // Get the item passed from CartPage
  const item = state ? state.item : null;
  const navigate = useNavigate();

  // Function to handle order placement
  const handlePlaceOrder = () => {
    // Check if the user is signed in (mock implementation: you can replace with real authentication logic)
    const isSignedIn = localStorage.getItem("isSignedIn"); // Assuming "isSignedIn" is stored in localStorage

    if (isSignedIn) {
      alert("Your order has been placed!");
      navigate("/Products"); // Redirect to products page
    } else {
      alert("You must sign in to place your order!");
      navigate("/auth/sign-in", { state: { redirectTo: "/order", item } }); // Redirect to SignIn with order details
    }
  };

  // Calculate the total price (price * quantity)
  const totalPrice = item ? item.price * item.quantity : 0;

  return (
    <div className="order-container">
      <h1>Order Summary</h1>

      {item ? (
        <div className="order-item">
          <p>{item.name} - Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${totalPrice.toFixed(2)}</p> {/* Calculate total and format it to 2 decimal places */}

          <button onClick={handlePlaceOrder} className="place-order">
            Place Order
          </button>
        </div>
      ) : (
        <p>No item details found. Go back to the cart to order a product.</p>
      )}
    </div>
  );
};

export default OrderPage;
