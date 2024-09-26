/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const history=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    termsChecked: false,
  });

  const gradientStyle = {
    backgroundImage: 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirmation, termsChecked } = formData;
    console.log(name, email, password, passwordConfirmation, termsChecked);
    if (name && email && password && passwordConfirmation && termsChecked) {
      fetch("http://localhost:5000/Signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirmation,
          termsChecked,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "UserRegister");
          history("/Signin");
        });
    } else {
      alert("Please fill in all fields and agree to the terms and conditions.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen" style={gradientStyle}>
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg" alt="Books" className="object-cover w-full h-full" />
      </div>
      {/* Right: Registration Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-100xl font-semibold mb-4 text-white text-sm font-semibold hover:text-black mr-4"><span style={{ fontSize: '50px' }}>REGISTER</span></h1>
        <form onSubmit={handleSubmit} action="/" method="POST">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-sm font-semibold hover:text-black mr-4">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="text-white text-sm font-semibold hover:text-black mr-4">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="text-white text-sm font-semibold hover:text-black mr-4">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Password Confirmation Input */}
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="text-white text-sm font-semibold hover:text-black mr-4">Confirm Password</label>
            <input type="password" id="password_confirmation" name="passwordConfirmation" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Terms and Conditions Checkbox */}
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" name="termsChecked" className="text-blue-500" onChange={handleChange} />
            <label htmlFor="terms" className="text-white text-sm font-semibold hover:text-black mr-4">I agree to the <a href="#" className="underline">terms and conditions</a></label>
          </div>
          {/* Sign Up Button */}
          <button type="submit" className="text-white text-sm font-semibold border px-4 py-2 rounded-lg text-white text-sm font-semibold hover:text-black mr-4">REGISTER</button>
        </form>
        {/* Login Link */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="/Signin" className="text-white text-sm font-semibold border px-4 py-2 rounded-lg text-white text-sm font-semibold hover:text-black mr-4">Already have an account? Login Here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
