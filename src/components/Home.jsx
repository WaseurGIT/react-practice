import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Banner from "./Banner";
import Cart from "./Cart";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === food.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...food, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (foodId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== foodId)
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        setIsOpen={setIsCartOpen}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Banner />
      <div className="py-12 px-4">
        <Products handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Home;
