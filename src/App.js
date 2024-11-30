// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Products from './Pages/Products';
// import Cart from './Pages/Cart';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import SignIn from './components/sign-in';
// import SignUp from './components/register';
// import ForgotPassword from './components/ForgotPassword';

// // Auth component to handle signIn, signUp, forgotPassword flow
// const Auth = ({ currentForm, handleFormSwitch }) => {
//   return (
//     <div className="auth-container">
//       {currentForm === 'sign-in' && <SignIn onSwitch={handleFormSwitch} />}
//       {currentForm === 'register' && <SignUp onSwitch={handleFormSwitch} />}
//       {currentForm === 'ForgotPassword' && <ForgotPassword onSwitch={handleFormSwitch} />}
//     </div>
//   );
// };

// const App = () => {
//   const [currentForm, setCurrentForm] = useState('sign-in'); // Controls which form to show

//   // Switch between forms in the auth flow
//   const handleFormSwitch = (form) => {
//     setCurrentForm(form);
//   };

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Navbar />

//         {/* Routing for the pages */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route
//           path="/cart"
//           element={<Cart isSignedIn={isSignedIn} />}
//         />          <Route
//             path="/auth"
//             element={<Auth currentForm={currentForm} handleFormSwitch={handleFormSwitch} />}
//           />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Pages/Home';
// import Products from './Pages/Products';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import SignIn from './components/sign-in';
// import SignUp from './components/register';
// import CartPage from './Pages/Cart';
// import "./App.css"
// import { CartProvider } from './Pages/CartContext';
// import ForgotPassword from './components/ForgotPassword';

// const Auth = ({ currentForm, handleFormSwitch }) => {
//   return (
//     <div className="auth-container">
//       {currentForm === 'sign-in' && <SignIn onSwitch={handleFormSwitch} />}
//       {currentForm === 'register' && <SignUp onSwitch={handleFormSwitch} />}
//       {currentForm === 'ForgotPassword' && <ForgotPassword onSwitch={handleFormSwitch} />}
//     </div>
//   );
// };

// const App = () => {
//   const [currentForm, setCurrentForm] = useState('sign-in'); // Controls which form to show
//   const [isSignedIn, setIsSignedIn] = useState(false); // Track if user is signed in

//   // Function to handle sign-in status
//   const handleSignIn = () => {
//     setIsSignedIn(true); // Example of changing state when user signs in
//   };

//   return (
//     <CartProvider>
//       <Router>
//         <div>
//           <Header />
//           <Navbar />

//           {/* Button for Sign-In and Start Shopping */}
//           <div className="action-buttons">
//             <button onClick={handleSignIn}>Sign In</button>
//             <Link to="/products">
//               <button>Start Shopping</button>
//             </Link>
//           </div>

//           {/* Routing for the pages */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route
//               path="/cart"
//               element={<CartPage isSignedIn={isSignedIn} />} // Pass isSignedIn if needed
//             />
//             <Route
//               path="/auth"
//               element={
//                 <Auth
//                   currentForm={currentForm}
//                   handleFormSwitch={setCurrentForm}
//                 />
//               }
//             />
//           </Routes>

//           <Footer />
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Switch } from 'react-router-dom';
// import {Switch} from 'react-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/sign-in';
import SignUp from './components/register';
import CartPage from './Pages/Cart';
import "./App.css";
import { CartProvider } from './Pages/CartContext';
import SearchResults from './Pages/searchPage';
import OrderPage from './Pages/OrderPage';

// Auth component to handle the form switching logic
const Auth = ({ currentForm, setCurrentForm, handleLogIn }) => {
  return (
    <div className="auth-container">
      {currentForm === 'sign-in' && <SignIn onSwitch={setCurrentForm} onLogIn={handleLogIn} />}
      {currentForm === 'register' && <SignUp onSwitch={setCurrentForm} />}
    </div>
  );
};

const App = () => {
  const [currentForm, setCurrentForm] = useState('sign-in'); // Controls which form to show
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is signed in
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle login logic
  const handleLogIn = (email, password) => {
    // Simulate a successful login
    setIsLoggedIn(true);
    navigate('/cart'); // Redirect to cart after successful login
  };

  const handleStartShopping = () => {
    navigate('/products'); // Navigate to products page
  };

  return (
    <CartProvider>
      <div>
        <Header />
        <Navbar />

        {/* Routing for the pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
         <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/OrderPage" element={<OrderPage />} />


          <Route
            path="/cart"
            element={
              <CartPage
                isLoggedIn={isLoggedIn}
                onStartShoppingClick={handleStartShopping}
              />
            }
          />
          <Route path="/Order" element={<OrderPage />} />


          <Route
            path="/auth"
            element={
              <Auth
                currentForm={currentForm}
                setCurrentForm={setCurrentForm} // Passing setCurrentForm here
                handleLogIn={handleLogIn} // Pass handleLogIn to Auth
              />
            }
          />

          <Route path="/search-results" element={<SearchResults />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
};

// Wrap the entire app with Router here
const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default WrappedApp;
