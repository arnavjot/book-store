/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const history=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log(email, password);
    fetch("http://localhost:5000/Signin",{
      method : "POST",
      crossDomain:true,
      headers:{
        "Content-type" : "application/json",
        Accept : "application/json",
        "Access-Control-Allow-Origin":"*",
      },
        body:JSON.stringify({
          email,
          password,
        }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"UserRegister")
      history("/Home");
    })
  };
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  
  const gradientStyle = {
    backgroundImage: 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)',
  };

  

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen" style={gradientStyle}>
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg" className="object-cover w-full h-full" />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-100xl font-semibold mb-4 text-white text-sm font-semibold hover:text-black mr-4"><span style={{ fontSize: '50px' }}>LOGIN</span></h1>
        <form onSubmit={handleSubmit} action="/" method="POST">
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="text-white text-sm font-semibold hover:text-black mr-4">Username</label>
            <input type="text" id="username" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="text-white text-sm font-semibold hover:text-black mr-4">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleChange} />
          </div>
          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-white text-sm font-semibold hover:text-black mr-4">Remember Me</label>
          </div>
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <a href="#" className=" text-white text-sm font-semibold hover:text-black mr-4 hover:underline">Forgot Password?</a>
          </div>
          {/* Login Button */}
          <button type="submit" className="text-white text-sm font-semibold border px-4 py-2 rounded-lg text-white text-sm font-semibold hover:text-black mr-4">LOGIN</button>
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="/Signup" className="text-white text-sm font-semibold border px-4 py-2 rounded-lg text-white text-sm font-semibold hover:text-black mr-4">Sign up Here</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;