// import React, { useState, useEffect } from 'react';
// import CartItems from './CartItems'; // Assuming CartItems component is in the same directory

// const ViewPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Placeholder logic to fetch cart items
//   useEffect(() => {
//     // Simulate fetching cart items from backend or local storage
//     const fetchedCartItems = [
//       {
//         id: 'Book1',
//         name: 'I LOVE YOU',
//         image: 'https://5.imimg.com/data5/AT/WN/MY-28766575/cecelia-ahern-ps-i-love-you.jpg',
//         price: 134,
//         quantity: 1,
//       },
//       // Add more items as needed
//     ];
//     setCartItems(fetchedCartItems);
//   }, []); // Empty dependency array to fetch data only once

//   return (
//     <div>
//       <h1>View Page</h1>
//       <CartItems cartItems={cartItems} />
//     </div>
//   );
// };

// export default ViewPage;

import React, { useState, useEffect } from 'react';
import CartItems from './CartItems'; // Assuming CartItems component is in the same directory
import { useLocation } from 'react-router-dom';

const ViewPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const name = searchParams.get('name'); // Remove parseFloat for name
    const image = searchParams.get('image'); // Add image extraction
    const price = parseFloat(searchParams.get('price')); // Changed to parseFloat for decimal values
    const quantity = parseInt(searchParams.get('quantity'));

    // Set the product with exact price and quantity in cartItems state
    setCartItems([{ id, name, image, price, quantity }]);
  }, [location.search]);

  return (
    <div>
      <h1>View Page</h1>
      <CartItems cartItems={cartItems} />
    </div>
  );
};

export default ViewPage;
