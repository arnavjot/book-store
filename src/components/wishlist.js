import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const navigate = useNavigate();
  // Sample data structure for wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "I Love You", price: 100, quantity: 1, path: "/Book1" },
    { id: 2, name: "Love in the Time of Cholera", price: 150, quantity: 1, path: "/Book2" },
    // Add more items as needed
  ]);

  const increaseQuantity = (id) => {
    const newItems = wishlistItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setWishlistItems(newItems);
  };

  const decreaseQuantity = (id) => {
    const newItems = wishlistItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setWishlistItems(newItems);
  };

  const removeFromWishlist = (id) => {
    const newItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(newItems);
  };

  const addToCart = (item) => {
    // Assuming you have a function to add items to the cart
    // addProductToCart(item);
    alert(`Added ${item.name} to cart!`);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-xl font-semibold mb-4">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id} className="mb-4 p-4 shadow rounded">
              <h2 className="text-lg font-bold">{item.name} - ${item.price}</h2>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => increaseQuantity(item.id)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">+</button>
              <button onClick={() => decreaseQuantity(item.id)} className="mr-2 bg-red-500 text-white px-2 py-1 rounded">-</button>
              <button onClick={() => removeFromWishlist(item.id)} className="mr-2 bg-gray-500 text-white px-2 py-1 rounded">Remove</button>
              <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 py-1 rounded">Add to Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Wishlist;
