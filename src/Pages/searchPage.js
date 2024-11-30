import React, { useEffect, useState } from 'react';

const SearchResults = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve the search results from localStorage
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      const parsedResults = JSON.parse(storedResults);
      console.log('Stored results:', parsedResults); // Debugging line
      if (Array.isArray(parsedResults) && parsedResults.length > 0) {
        setProducts(parsedResults); // Set products only if valid
      } else {
        console.log('No valid products found in storage'); // Debugging line
      }
    } else {
      console.log('No search results in localStorage'); // Debugging line
    }
  }, []);

  return (
    <div className="search-results">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found for your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
