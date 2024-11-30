
import { Link } from "react-router-dom";

import { useState, useEffect } from "react"; // <-- Add this line to import useState


import React from "react";
import { useLocation } from "react-router-dom";
import "./Products.css"


// Mock data for products
const products = [
    { id: 1, name: "Smartphone",price:"400$", category: "Electronics", image: "https://i.ebayimg.com/00/s/NDM3WDUwMA==/z/6IwAAOSwstxVS-LE/$_57.JPG",quantity:4 },
    { id: 2, name: "iPhone 15",price:"500$", category: "Electronics", image: "https://th.bing.com/th?q=Smartphone%2fiPhone+15&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
    { id: 3, name: "s24 Ultra",price:"700$", category: "Electronics", image: "https://th.bing.com/th?q=Smartphone+S24+Ultra&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
    { id: 4, name: "Samsung Galaxy A52", price:"600$",category: "Electronics", image: "https://th.bing.com/th?q=Smartphone+Samsung+Galaxy+A52&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
    { id: 5, name: "Flip Phone ", price:"8004",category: "Electronics", image: "https://th.bing.com/th?q=Smartphone+Flip+Phone&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
  { id: 6, name: "Tablet 10 inch android",price:"1000", category: "Electronics", image: "https://th.bing.com/th/id/OIP.xLcF05Qy0zmZFJPAAuqxEgHaF1?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 7, name: "Samsung Galaxy 3", price:"200",category: "Electronics", image: "https://th.bing.com/th?q=Samsung+Galaxy+3+Tablet&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
  { id: 8, name: "Panaonic Microwave",price:"400", category: "Electronics", image: "https://th.bing.com/th/id/OIP.SStW1WqSaHNuUNca_emmAwHaEr?w=303&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 9, name: "Trend Smartscreen", price:"400",category: "Electronics", image: "https://th.bing.com/th/id/OIP._8kzjUYjkGZGeGfyYV_ChwHaFj?rs=1&pid=ImgDetMain" },
  { id: 10, name: "Trend Smartscreen",price:"4000", category: "Electronics", image: "https://th.bing.com/th/id/OIP.6SWZP4T92rnDQi48LWmIRgHaGm?w=204&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 11, name: "Black-Headphone",price:"403", category: "Electronics", image: "https://th.bing.com/th/id/OIP.Akq2fwQAsqXxw72u7iT9qQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 12, name: "Wireless-Headphone", price:"4002",category: "Electronics", image: "https://th.bing.com/th/id/OIP.u6Nw2dNy3QLBD9tJ4CH5gQAAAA?rs=1&pid=ImgDetMain" },
  { id: 13, name: "Tote Bag",price:"4006", category: "Fashion", image: "https://th.bing.com/th/id/OIF.iLzufy8tlX3Q4fIdX6LDTg?rs=1&pid=ImgDetMain" },
  { id: 14, name: "School Bag",price:"4008", category: "Fashion", image: "https://th.bing.com/th/id/OIF.xtdcjsyE6zUEtXKew3kk7g?w=205&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 15, name: "fashion Trendy",price:"4009", category: "Fashion", image: "https://th.bing.com/th/id/OIF.J4WMZbS3ewTHIrTG7r6p6g?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 16, name: "trendy bag",price:"4006", category: "Fashion", image: "https://th.bing.com/th/id/OIF.GZbkbAEmy84u3sVEnvJR7w?rs=1&pid=ImgDetMain" },
  { id: 17, name: " women trendy bag",price:"400$", category: "Fashion", image: "https://th.bing.com/th/id/OIF.JEgwdSBbH1xnayKFPFaImw?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 18, name: "size 14 zipper fancy",price:"345", category: "Fashion", image: "https://th.bing.com/th/id/OIP.rFu6pd_N5Lf9_kBSXq18RwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 19, name: "Korean",price:"400$", category: "Fashion", image: "https://th.bing.com/th?q=Korean+Fashion+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247" },
  { id: 20, name: "men's shoes",price:"678", category: "Fashion", image: "https://th.bing.com/th/id/R.f450c7d6b81cf1522d95ae0098217dbc?rik=eCnltwcCDMKMWw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-bcreyTkbVcM%2fUOF403VUmZI%2fAAAAAAAAAds%2fqxmT6GpMNss%2fs1600%2ffree-shipping-men-s-fashion-shoes-leather-martin-shoes-for-men-3-colors.jpg&ehk=VCFQwOUiW%2b5FRmXJeG4gy%2bc4Vv8Qry4aBwzj7QXLqWc%3d&risl=&pid=ImgRaw&r=0" },
  { id: 21, name: "fashion worls ladies-shoes",price:"235", category: "Fashion", image: "https://th.bing.com/th/id/OIP.1Tq0mLZv9M4z-djRwi9jYAAAAA?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 22, name: "purple scarf",price:"4906", category: "Fashion", image: "https://th.bing.com/th/id/OIP.c7x5c87fpdh1EPQj0-hoTQHaL2?rs=1&pid=ImgDetMain" },
  { id: 23, name: "long scarf", price:"123",category: "Fashion", image: "https://th.bing.com/th/id/OIF.cACn6LuqORAa6L8mTRglOg?rs=1&pid=ImgDetMain" },
  { id: 24, name: "men scarf",price:"456", category: "Fashion", image: "https://th.bing.com/th/id/OIP.537CkmEd8qdno0L0A0dBVQHaHa?rs=1&pid=ImgDetMain" },
  { id: 25, name: "men trendy t-shirt",price:"200", category: "Fashion", image: "https://th.bing.com/th/id/OIF.pRnkHwQQrBxGB1ZfH1nkdA?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 26, name: "hoodi", price:"456",category: "Fashion", image: "https://th.bing.com/th/id/OIF.1OBnIAQwd3gSYKebZRrw9w?w=136&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 27,name: "book 12", price:"123", category: "Books", image: "https://th.bing.com/th/id/OIP.IAK1bNmN9UZlMTWZNH6PpwHaHr?rs=1&pid=ImgDetMain" },
  { id: 28, name: "book 12",price:"677",category: "Books", image: "https://th.bing.com/th/id/OIP.ifmJAoMUZUDDkPL5h44LJAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 29,name: "book 12", price:"299", category: "Books", image: "https://th.bing.com/th/id/OIF.ZzUOexaF3GNVm6rm0ZdX4Q?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 30,name: "book 12",price:"434", category: "Books", image: "https://th.bing.com/th/id/OIP.robgnIqY-SFA0VjN3jJwhAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 31,name: "book 82",price:"4056",  category: "Books", image: "https://th.bing.com/th/id/OIP.L62HOaeomRnvmH40Ik2MOgHaHa?rs=1&pid=ImgDetMain" },
  { id: 32,name: "book 72", price:"434", category: "Books", image: "https://th.bing.com/th/id/OIP.iRUwN2fvGtslrj_uzdROJAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 34,name: "book 42", price:"408", category: "Books", image: "https://th.bing.com/th/id/OIP.WBnh5sVhum0xlB0mHHlAwQHaI4?w=208&h=249&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 35,name: "book 32",price:"566", category: "Books", image: "https://th.bing.com/th/id/OIP.QAZsIPJOw4UprVKemW7T_QHaHa?rs=1&pid=ImgDetMain" },
  {id: 36 ,name: "book 72",price:"906",category:"Books", image:"https://m.media-amazon.com/images/I/51jfYJvfh0L._SX342_SY445_.jpg"},
  {id: 37 ,name: "book 62",price:"400",category:"Books", image:"https://blog.hyperiondev.com/wp-content/uploads/2018/06/Picture1.png"},
  {id: 38 ,name: "book 52",price:"400",category:"Books", image:"https://th.bing.com/th/id/R.0f569078afba37b3371564553c2dd548?rik=ehQdeGUrVt8Kcg&pid=ImgRaw&r=0"},
  {id: 39 ,name: "sport 12",price:"400",category:"Sports", image:"https://th.bing.com/th/id/OIF.p5xvHG9Ms12NvKCgBREd3Q?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 40 ,name: "sport 24",price:"400",category:"Sports", image:"https://th.bing.com/th/id/OIF.IEqINmZIUhqxwzFBHR1avw?w=144&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 41 ,name: "sport 54",price:"400",category:"Sports", image:"https://th.bing.com/th/id/OIF.k9LinEbzFr4RBd8fFIcTOA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 42 ,name: "sport 74",price:"470",category:"Sports", image:"https://th.bing.com/th/id/OIF.Tjqf2wPVnzdwmDWjMtVU3A?rs=1&pid=ImgDetMain"},
  {id: 43 ,name: "sport 04",price:"409",category:"Sports", image:"https://th.bing.com/th?id=OIF.V%2brP8IvJjqQN%2flrXj1xIBg&w=172&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 44 ,name: "sport 94",price:"407",category:"Sports", image:"https://th.bing.com/th?id=OIF.Loce9tDu81Vblf0BshJ%2fHQ&w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 45 ,name: "sport 84",price:"678",category:"Sports", image:"https://th.bing.com/th?id=OIF.%2fWIiKbMgffTa9ZgklaW4Yg&w=188&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 46 ,name: "sport 64",price:"234",category:"Sports", image:"https://th.bing.com/th/id/OIF.YDNwct1V9lSp0XZaZjgpOg?w=314&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 47 ,name: "sport 74",price:"200",category:"Sports", image:"https://th.bing.com/th/id/OIF.ITpA87WOfkshQIsBvGzHlA?w=151&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 48,name: "sport 84",price:"400",category:"Sports", image:"https://th.bing.com/th/id/OIP.WhUHzhBxX04Uceuy8qqgQwHaEK?rs=1&pid=ImgDetMain"},
  {id: 49 ,name: "sport 04",price:"400",category:"Sports", image:"https://th.bing.com/th?id=OIF.it3s26iX71AivLeRzD%2fWHQ&w=143&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 50,name: "perfume 74",price:"400",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.0Ig0QdrLEuyi3YDUIC_3rwAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 51,name: "perfume 64",price:"4004",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.qNwLGumwJhPYzb2PdKrFEQAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 52,name: "perfume 84",price:"4001",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.CfwT07zCgfRXpAvlsfD1lAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 53,name: "perfume 34",price:"4003",category:"Perfumes", image:"https://th.bing.com/th/id/R.a24808719ef5bb252f68c5113dfb4913?rik=0gq1SFsgIF2kPA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0042%2f7160%2f3782%2fproducts%2fimage_7638670d-acba-4ddf-b88c-74d0e36abfd5_1024x1024.jpg%3fv%3d1608156922&ehk=XNs3h1uEtLODhOQuhOOibHUzpyTayfbtkX3eXftuHZ8%3d&risl=&pid=ImgRaw&r=0"},
  {id: 54,name: "perfume 14",price:"4004",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.R0PzCjuQB4BvHOgHJ9wYuwHaER?rs=1&pid=ImgDetMain"},
  {id: 55,name: "perfume 24",price:"4008",category:"Perfumes", image:"https://hips.hearstapps.com/hmg-prod/images/2022-perfumes-index-1657224599.jpg"},
  {id: 56,name: "perfume 04",price:"4005",category:"Perfumes", image:"https://m.media-amazon.com/images/I/71omvpGj+JL._AC_SL1500_.jpg"},
  {id: 57,name: "perfume 344",price:"4009",category:"Perfumes", image:"https://images-na.ssl-images-amazon.com/images/I/61ThiKBCztL._SL1000_.jpg"},
  {id: 58,name: "perfume 0",price:"4000",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.OreGVXKU0sseMzw10SI4kwHaHe?w=204&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 59,name: "perfume 7",price:"4007",category:"Perfumes", image:"https://static.chollometro.com/threads/raw/UbHsH/1403808_1/re/768x768/qt/60/1403808_1.jpg"},
  {id: 60,name: "perfume 3",price:"4004",category:"Perfumes", image:"https://th.bing.com/th/id/OIP.6pLGsnVgec853tOhIhUqNQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 61,name: "perfume 1",price:"400",category:"Perfumes", image:"https://th.bing.com/th/id/OIF.avomPPlu6tUVe37oPBfpeQ?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  {id: 62,name: "perfume 431",price:"400",category:"Perfumes", image:"https://m.media-amazon.com/images/I/31AlWe8Wp6L._SS520_.jpg"},
  {id: 63,name: "perfume 567",price:"400",category:"Perfumes", image:"https://th.bing.com/th?id=OIF.yr4k%2b%2bYYFVTNg4Vavb%2bvyA&w=203&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
  



];

const Products = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  // Filter products based on category
  const filteredProducts = category
    ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    : products;

  // State for cart items and showing the success message
  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useState("");
  const [cartCountAnimation, setCartCountAnimation] = useState(false);

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // Save to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show success message
    setAddedMessage(`${product.name} has been added to your cart!`);
    
    // Trigger animation for the cart count
    setCartCountAnimation(true);
    setTimeout(() => setCartCountAnimation(false), 500); // Reset animation after 500ms

    // Hide success message after 3 seconds
    setTimeout(() => setAddedMessage(""), 3000);
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            {product.price && <p className="product-price">{product.price}</p>}
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <Link to="/cart" className="cart-link">
          Go to Cart
        </Link>
        <p className={`cart-count ${cartCountAnimation ? "animate" : ""}`}>
          Items in Cart: {cart.length}
        </p>
      </div>

      {/* Show success message */}
      {addedMessage && <div className="added-message">{addedMessage}</div>}
    </div>
  );
};

export default Products;