import React, { useState } from 'react';
import MainNav from '../MainNavbar';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const name = 'Discover Your Destiny';
  const Baseprice = 225;


  const image = 'https://www.booksbykilo.in/media/books/BBK/9780007195718-New.jpg';
  const price = quantity > 0 ? Baseprice * quantity : 0;
  const formData = { name, price, quantity };
  const history = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to check

    fetch('http://localhost:5000/Book3', {
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


 return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image} style={{ width: 380, height: 580 }}
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
           
            Discover Your Destiny" by Robin Sharma is a transformative guide to personal and professional fulfillment that offers practical wisdom and insights for living a purposeful life. Drawing on ancient Eastern philosophies and modern principles of success, Sharma presents a step-by-step approach to discovering one's true calling, unleashing potential, and achieving lasting happiness. Through inspiring stories, practical exercises, and actionable advice, the book guides readers on a journey of self-discovery, helping them identify their passions, set meaningful goals, and overcome obstacles on the path to success. Whether seeking career advancement, personal growth, or spiritual enlightenment, "Discover Your Destiny" provides valuable tools and strategies for living with purpose, passion, and joy.


            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                {/* Color options removed */}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">price:₹{price}</span>
              <button onClick={addToCart} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <MainNav/>
    </section>
  );
};

export default ProductCard;




