import React, { useState } from 'react';
import MainNav from '../MainNavbar'
import { useNavigate } from 'react-router-dom';
//

//
// const ProductCard = () => {
//   const [quantity, setQuantity] = useState(1);
//   const name = 'I LOVE YOU';
//   const Baseprice = 134;
//   const image = 'https://5.imimg.com/data5/AT/WN/MY-28766575/cecelia-ahern-ps-i-love-you.jpg';
//   const price = quantity > 0 ? Baseprice * quantity : 0;  // Update price based on quantity
//   const formData = { name,  price, quantity };
//   const history = useNavigate();
//



  // Include increaseQuantity, decreaseQuantity, and other JSX as before


const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const name = 'I LOVE YOU';
  const Baseprice = 134;
  const image = 'https://5.imimg.com/data5/AT/WN/MY-28766575/cecelia-ahern-ps-i-love-you.jpg';
  const price = quantity > 0 ? Baseprice * quantity : 0;  // Update price based on quantity
  const formData = { name, price, quantity };
  const history = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to check
    fetch('http://localhost:5000/Book1', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'CartInfo');
        alert("Product added to cart successfully");
        history(`/View?id=Book1&name=${name}&quantity=${quantity}&price=${price}&image=${image}`);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  const addToWishlist = () => {
    // Add wishlist logic here (if needed to communicate with backend)
    setWishlistMessage('Book added to wishlist successfully!');
    setTimeout(() => {
      setWishlistMessage('');
    }, 3000); // Message disappears after 3 seconds
  };

  


//
  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const addToCart = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Log the form data to check
    

  //   fetch('http://localhost:5000/Book1', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, 'CartInfo');
  //       alert("Product added to cart successfully");
  //       // history("/View")
  //       // history(`/View?id=Book1&name:${name}&quantity=${quantity}&price=${price}`);
  //       history('/View?id=Book1&name=${name}&quantity=${quantity}&price=${price}'); // Corrected URL parameters
  //     })
  //     })
  //     .catch((error) => {
  //       console.error('Error adding to cart:', error);
  //     });
  //     // history(`/View?id=Book1&quantity=${quantity}&price=${price}`);
  // };

  // const addToCart = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Log the form data to check

  //   fetch('http://localhost:5000/Book1', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Accept: 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, 'CartInfo');
  //       alert("Product added to cart successfully");
  //       history(`/View?id=Book1&name=${name}&quantity=${quantity}&price=${price}&image=${image}`);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding to cart:', error);
  //     });
  // };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image}style={{ width: 380, height: 580 }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BOOK NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <span className="text-gray-500">Qty: {quantity}</span>
                <button onClick={increaseQuantity} className="ml-2 text-gray-500 focus:outline-none">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 15l7-7 7 7"></path>
                  </svg>
                </button>
                <button onClick={decreaseQuantity} className="ml-2 text-gray-500 focus:outline-none">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </span>
            </div>
            <p className="leading-relaxed">
            A novel about holding on, letting go, and learning to love again.

Now in paperback, the endearing novel that captured readers' hearts and introduced a fresh new voice in women's fiction Cecelia Ahern.

Holly couldn't live without her husband Gerry, until the day she had to. They were the kind of young couple who could finish each other's sentences. When Gerry succumbs to a terminal illness and dies, 30-year-old Holly is set adrift, unable to pick up the pieces. But with the help of a series of letters her husband left her before he died and a little nudging from an eccentric assortment of family and friends, she learns to laugh, overcome her fears, and discover a world she never knew existed.

The kind of enchanting novel with cross-generational appeal that comes along once in a great while, PS, I Love You is a captivating love letter to the world!
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                {/* Color options removed */}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">price : ₹{price}</span>
              <button onClick={addToCart}  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
              <button onClick={addToWishlist} className="ml-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
              <svg className="w-6 h-6 inline-block mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.76 3.43c-1.43 0-2.74.73-3.54 1.88-.8-1.15-2.11-1.88-3.54-1.88C3.02 3.43 1 5.45 1 8.03c0 3.74 3.22 6.85 8.3 11.66l1.7 1.54 1.7-1.54c5.08-4.81 8.3-7.92 8.3-11.66 0-2.58-2.02-4.6-4.68-4.6-1.43 0-2.74.73-3.54 1.88-.8-1.15-2.11-1.88-3.54-1.88z"></path>
              </svg>
              Add to Wishlist
            </button>
            </div>
            {wishlistMessage && <p className="text-green-500 text-sm mt-2">{wishlistMessage}</p>}
          </div>
        </div>
      </div>
      <MainNav/>
    </section>
  );
};

export default ProductCard;