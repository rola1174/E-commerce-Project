// import React from 'react';
// import './Header.css';


// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">E-Commerce</div>
//       <input type="text" placeholder="Search products..." />
//       <div className="user-options">
//         <button>Sign In</button>
//         <button>Cart</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Handle the search functionality
  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }

    // Store search term in local storage
    localStorage.setItem('searchTerm', searchTerm);

    // Navigate to the search results page
    navigate('/search-results');
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}></div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="user-options">
        <button onClick={() => navigate('/auth')}>Sign In</button>
        <FaShoppingCart onClick={() => navigate('/cart')} style={{ fontSize: '24px', cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Header;
